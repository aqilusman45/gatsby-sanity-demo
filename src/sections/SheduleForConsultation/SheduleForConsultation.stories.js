import * as React from 'react'

import SheduleForConsultation from './SheduleForConsultation'

export default {
  title: 'Sections/SheduleForConsultation',
  component: SheduleForConsultation,
}

const Template = (args) => <SheduleForConsultation {...args} />

export const Default = Template.bind({})
Default.args = {}
