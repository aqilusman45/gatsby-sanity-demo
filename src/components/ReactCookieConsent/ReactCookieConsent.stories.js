import * as React from 'react'

import ReactCookieConsent from './ReactCookieConsent'

export default {
  title: 'Components/ReactCookieConsent',
  component: ReactCookieConsent,
}

const Template = (args) => <ReactCookieConsent {...args} />

export const Default = Template.bind({})
Default.args = {}
