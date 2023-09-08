import * as React from 'react'
import mockRichText from './mocks'
import RichText from './RichText'

export default {
  title: 'Components/RichText',
  component: RichText,
}

const Template = (args) => <RichText {...args} />

export const Default = Template.bind({})
Default.args = {
  richText: mockRichText,
}
