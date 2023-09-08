import * as React from 'react'

import LeadForm from './LeadForm'

export default {
  title: 'Sections/LeadForm',
  component: LeadForm,
}

const Template = (args) => <LeadForm {...args} />

export const Default = Template.bind({})
Default.args = {}
