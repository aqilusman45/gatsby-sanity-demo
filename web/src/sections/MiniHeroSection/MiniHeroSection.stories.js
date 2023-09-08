import * as React from 'react'

import MiniHeroSection from './MiniHeroSection'
import mocks from './mocks'

export default {
  title: 'Sections/MiniHeroSection',
  component: MiniHeroSection,
}

const Template = (args) => <MiniHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
