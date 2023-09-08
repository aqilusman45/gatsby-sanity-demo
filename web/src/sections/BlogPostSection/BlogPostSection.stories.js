import * as React from 'react'

import BlogPostSection from './BlogPostSection'
import mocks from './mocks'

export default {
  title: 'Sections/BlogPostSection',
  component: BlogPostSection,
}

const Template = (args) => <BlogPostSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
