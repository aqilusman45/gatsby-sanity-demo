import * as React from 'react'

import ServicesCard from './ServicesCard'

export default {
  title: 'Components/ServicesCard',
  component: ServicesCard,
}

const Template = (args) => <ServicesCard {...args} />

export const Default = Template.bind({})
Default.args = {}
