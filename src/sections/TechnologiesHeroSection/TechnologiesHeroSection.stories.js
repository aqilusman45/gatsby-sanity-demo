import * as React from 'react'

import TechnologiesHeroSection from './TechnologiesHeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/TechnologiesHeroSection',
  component: TechnologiesHeroSection,
}

const Template = (args) => <TechnologiesHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
