import * as React from 'react'

import BlogsHubCard from './BlogsHubCard'

export default {
  title: 'Components/BlogsHubCard',
  component: BlogsHubCard,
}

const Template = (args) => <BlogsHubCard {...args} />

export const Default = Template.bind({})
Default.args = {}
