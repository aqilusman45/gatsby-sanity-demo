import * as React from 'react'

import BlogHeroSection from './BlogHeroSection'

export default {
  title: 'Sections/BlogHeroSection',
  component: BlogHeroSection,
}

const Template = (args) => <BlogHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
