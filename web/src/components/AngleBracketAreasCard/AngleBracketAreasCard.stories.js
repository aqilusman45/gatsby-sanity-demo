import * as React from 'react'

import AngleBracketAreasCard from './AngleBracketAreasCard'

export default {
  title: 'Components/AngleBracketAreasCard',
  component: AngleBracketAreasCard,
}

const Template = (args) => <AngleBracketAreasCard {...args} />

export const Default = Template.bind({})
Default.args = {}
