import * as React from 'react'

import FeaturedBlogSection from './FeaturedBlogSection'

export default {
  title: 'Sections/FeaturedBlogSection',
  component: FeaturedBlogSection,
}

const Template = (args) => <FeaturedBlogSection {...args} />

export const Default = Template.bind({})
Default.args = {}
