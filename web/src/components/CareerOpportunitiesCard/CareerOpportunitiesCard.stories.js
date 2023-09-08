import * as React from 'react'

import CareerOpportunitiesCard from './CareerOpportunitiesCard'

export default {
  title: 'Components/CareerOpportunitiesCard',
  component: CareerOpportunitiesCard,
}

const Template = (args) => <CareerOpportunitiesCard {...args} />

export const Default = Template.bind({})
Default.args = {}
