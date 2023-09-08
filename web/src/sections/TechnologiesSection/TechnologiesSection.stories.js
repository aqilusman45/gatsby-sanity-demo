import * as React from 'react'

import TechnologiesSection from './TechnologiesSection'

export default {
  title: 'Sections/TechnologiesSection',
  component: TechnologiesSection,
}

const Template = (args) => <TechnologiesSection {...args} />

export const Default = Template.bind({})
Default.args = {}
