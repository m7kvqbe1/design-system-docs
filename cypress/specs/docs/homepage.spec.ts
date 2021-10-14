/* eslint-disable jest/expect-expect */
import { describe, cy, it, before } from 'local-cypress'

// eslint-disable-next-line import/extensions
import selectors from '../../selectors/docs'

describe('Docs Site: Homepage', () => {
  describe('when browsing on desktop', () => {
    before(() => {
      cy.blockNewRelic()

      cy.visit('/')
    })
  })

  describe(
    'when browsing on mobile',
    {
      viewportHeight: 1000,
      viewportWidth: 500,
    },
    () => {
      before(() => {
        cy.blockNewRelic()

        cy.visit('/')
      })

      describe('when the mobile navigation is opened', () => {
        it('should open the mobile navigation', () => {
          cy.get(selectors.layout.mastheadToggleButton).click()
          cy.get(selectors.layout.mastheadMenuExpandButton).should('be.visible')
        })

        describe('and the first sub menu group is expanded', () => {
          it('should expand the relevant sub menu', () => {
            cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
            cy.get('a').contains('Learning resources').should('be.visible')
            cy.get('a').contains('Colours').should('not.exist')
          })

          describe('and the second sub menu group is expanded', () => {
            it('should expand the relevant sub menu', () => {
              cy.get(selectors.layout.mastheadMenuExpandButton).eq(1).click()
              cy.get('a').contains('Learning resources').should('be.visible')
              cy.get('a').contains('Colours').should('be.visible')
            })

            describe('and the first sub menu group is collapsed', () => {
              it('should collapse the relevant sub menu', () => {
                cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
                cy.get('a').contains('Learning resources').should('not.exist')
                cy.get('a').contains('Colours').should('be.visible')
              })
            })
          })
        })

        describe('when clicking outside the mobile menu', () => {
          it('should close the mobile menu', () => {
            cy.get(selectors.layout.masthead).click()
            cy.get(selectors.layout.mastheadMenuExpandButton).should(
              'be.visible'
            )
          })
        })
      })
    }
  )
})
