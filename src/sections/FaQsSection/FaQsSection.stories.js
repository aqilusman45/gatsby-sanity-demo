import * as React from 'react'

import FaQsSection from './FaQsSection'
import mocks from './mocks'

export default {
  title: 'Sections/FaQsSection',
  component: FaQsSection,
}

const Template = (args) => <FaQsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
