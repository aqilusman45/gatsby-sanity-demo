import * as React from 'react'

import ConsultationSection from './ConsultationSection'
import mocks from './mocks'

export default {
  title: 'Sections/ConsultationSection',
  component: ConsultationSection,
}

const Template = (args) => <ConsultationSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
