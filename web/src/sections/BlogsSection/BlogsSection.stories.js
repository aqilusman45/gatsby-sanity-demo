import * as React from 'react'

import BlogsSection from './BlogsSection'

export default {
  title: 'Sections/BlogsSection',
  component: BlogsSection,
}

const Template = (args) => <BlogsSection {...args} />

export const Default = Template.bind({})
Default.args = {}
