import * as React from 'react'

import AboutHeroSection from './AboutHeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/AboutHeroSection',
  component: AboutHeroSection,
}

const Template = (args) => <AboutHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
