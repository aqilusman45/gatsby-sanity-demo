import * as React from 'react'

import ReviewsSection from './ReviewsSection'

export default {
  title: 'Sections/ReviewsSection',
  component: ReviewsSection,
}

const Template = (args) => <ReviewsSection {...args} />

export const Default = Template.bind({})
Default.args = {}
