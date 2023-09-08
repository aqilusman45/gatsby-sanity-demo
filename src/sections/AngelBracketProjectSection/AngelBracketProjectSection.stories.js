import * as React from 'react'

import AngelBracketProjectSection from './AngelBracketProjectSection'
import mocks from './mocks'

export default {
  title: 'Sections/AngelBracketProjectSection',
  component: AngelBracketProjectSection,
}

const Template = (args) => <AngelBracketProjectSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
