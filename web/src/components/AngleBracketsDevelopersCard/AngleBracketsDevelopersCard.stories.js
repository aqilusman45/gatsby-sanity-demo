import * as React from 'react'

import AngleBracketsDevelopersCard from './AngleBracketsDevelopersCard'
import mocks from './mocks'

export default {
  title: 'Components/AngleBracketsDevelopersCard',
  component: AngleBracketsDevelopersCard,
}

const Template = (args) => <AngleBracketsDevelopersCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
