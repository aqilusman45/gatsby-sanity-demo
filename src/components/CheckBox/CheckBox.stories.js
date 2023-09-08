import * as React from 'react'

import CheckBox from './CheckBox'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
}

const Template = (args) => <CheckBox {...args} />

export const Default = Template.bind({})
Default.args = {}
