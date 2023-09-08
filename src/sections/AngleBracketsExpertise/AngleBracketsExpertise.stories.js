import * as React from 'react'

import AngleBracketsExpertise from './AngleBracketsExpertise'
import mocks from './mocks'

export default {
  title: 'Sections/AngleBracketsExpertise',
  component: AngleBracketsExpertise,
}

const Template = (args) => <AngleBracketsExpertise {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
