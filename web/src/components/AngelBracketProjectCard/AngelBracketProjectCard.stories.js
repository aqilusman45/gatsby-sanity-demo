import * as React from 'react'

import AngelBracketProjectCard from './AngelBracketProjectCard'
import mocks from './mocks'

export default {
  title: 'Components/AngelBracketProjectCard',
  component: AngelBracketProjectCard,
}

const Template = (args) => <AngelBracketProjectCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
