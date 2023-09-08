import * as React from 'react'

import Stats from './Stats'

export default {
  title: 'Components/Stats',
  component: Stats,
}

const Template = (args) => <Stats {...args} />

export const Default = Template.bind({})
Default.args = {}
