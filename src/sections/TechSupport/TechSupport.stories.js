import * as React from 'react'

import TechSupport from './TechSupport'
import mocks from './mocks'

export default {
  title: 'Sections/TechSupport',
  component: TechSupport,
}

const Template = (args) => <TechSupport {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
