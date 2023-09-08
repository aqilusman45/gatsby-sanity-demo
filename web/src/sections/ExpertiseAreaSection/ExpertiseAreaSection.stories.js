import * as React from 'react'

import ExpertiseAreaSection from './ExpertiseAreaSection'
import mocks from './mocks'

export default {
  title: 'Sections/ExpertiseAreaSection',
  component: ExpertiseAreaSection,
}

const Template = (args) => <ExpertiseAreaSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
