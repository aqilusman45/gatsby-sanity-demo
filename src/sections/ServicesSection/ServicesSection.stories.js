import * as React from 'react'

import ServicesSection from './ServicesSection'

export default {
  title: 'Sections/ServicesSection',
  component: ServicesSection,
}

const Template = (args) => <ServicesSection {...args} />

export const Default = Template.bind({})
Default.args = {}
