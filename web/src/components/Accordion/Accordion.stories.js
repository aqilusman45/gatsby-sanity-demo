import * as React from 'react'

import Accordion from './Accordion'
import mocks from './mocks'

export default {
  title: 'Components/Accordion',
  component: Accordion,
}

const Template = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
