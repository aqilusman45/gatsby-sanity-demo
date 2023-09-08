import * as React from 'react'

import BlogsHubSection from './BlogsHubSection'

export default {
  title: 'Sections/BlogsHubSection',
  component: BlogsHubSection,
}

const Template = (args) => <BlogsHubSection {...args} />

export const Default = Template.bind({})
Default.args = {}
