import * as React from 'react'

import RequestSpecialistsSection from './RequestSpecialistsSection'
import mocks from './mocks'

export default {
  title: 'Sections/RequestSpecialistsSection',
  component: RequestSpecialistsSection,
}

const Template = (args) => <RequestSpecialistsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
