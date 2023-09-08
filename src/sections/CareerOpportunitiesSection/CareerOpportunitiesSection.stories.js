import * as React from 'react'

import CareerOpportunitiesSection from './CareerOpportunitiesSection'
import mocks from './mocks'

export default {
  title: 'Sections/CareerOpportunitiesSection',
  component: CareerOpportunitiesSection,
}

const Template = (args) => <CareerOpportunitiesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
