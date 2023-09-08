import * as React from 'react'

import HeroSection from './HeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/HeroSection',
  component: HeroSection,
}

const Template = (args) => <HeroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
