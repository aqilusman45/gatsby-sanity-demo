import * as React from 'react'

import CareerProcessSection from './CareerProcessSection'
import mocks from './mocks'

export default {
  title: 'Sections/CareerProcessSection',
  component: CareerProcessSection,
}

const Template = (args) => <CareerProcessSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
