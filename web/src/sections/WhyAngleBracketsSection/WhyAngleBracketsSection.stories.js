import * as React from 'react'

import WhyAngleBracketsSection from './WhyAngleBracketsSection'
import mocks from './mocks'

export default {
  title: 'Sections/WhyAngleBracketsSection',
  component: WhyAngleBracketsSection,
}

const Template = (args) => <WhyAngleBracketsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
