import * as React from 'react'

import BlogCard from './BlogCard'
import mocks from './mocks'

export default {
  title: 'Components/BlogCard',
  component: BlogCard,
}

const Template = (args) => <BlogCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
