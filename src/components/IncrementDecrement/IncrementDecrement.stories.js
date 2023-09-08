import * as React from 'react'

import IncrementDecrement from './IncrementDecrement'

export default {
  title: 'Components/IncrementDecrement',
  component: IncrementDecrement,
}

const Template = (args) => <IncrementDecrement {...args} />

export const Default = Template.bind({})
Default.args = {}
