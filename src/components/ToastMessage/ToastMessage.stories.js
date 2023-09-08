import * as React from 'react'

import ToastMessage from './ToastMessage'

export default {
  title: 'Components/ToastMessage',
  component: ToastMessage,
}

const Template = (args) => <ToastMessage {...args} />

export const Default = Template.bind({})
Default.args = {}
