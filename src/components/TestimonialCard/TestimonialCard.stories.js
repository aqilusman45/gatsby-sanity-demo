import * as React from 'react'

import TestimonialCard from './TestimonialCard'
import mocks from './mocks'

export default {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
}

const Template = (args) => <TestimonialCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
