import * as React from 'react'

import TestimonialsSection from './TestimonialsSection'
import mocks from './mocks'

export default {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
}

const Template = (args) => <TestimonialsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
