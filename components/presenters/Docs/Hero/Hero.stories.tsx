import React from 'react'
import { storiesOf } from '@storybook/react'

import { Hero } from '.'
import { Button, BUTTON_VARIANT } from '../Button'

const stories = storiesOf('Docs/Hero', module)

stories.add('Default', () => (
  <Hero
    version="0.1.0"
    title="Create powerful, modern applications with the MOD.UK Design System"
    description="The MOD.UK Design System is the foundaton for all Defence applications,
  providing intuitive and consistent, standards led user interfaces, reducing
  development and training time."
    cta1={<Button variant={BUTTON_VARIANT.PRIMARY}>Start Building</Button>}
    cta2={<Button variant={BUTTON_VARIANT.TERTIARY}>Visit Storybook</Button>}
  />
))
