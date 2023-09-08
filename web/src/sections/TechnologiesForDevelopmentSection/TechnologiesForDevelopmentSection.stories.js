import * as React from 'react'

import TechnologiesForDevelopmentSection from './TechnologiesForDevelopmentSection'
import mocks from './mocks'

export default {
  title: 'Sections/TechnologiesForDevelopmentSection',
  component: TechnologiesForDevelopmentSection,
}

const Template = (args) => <TechnologiesForDevelopmentSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
