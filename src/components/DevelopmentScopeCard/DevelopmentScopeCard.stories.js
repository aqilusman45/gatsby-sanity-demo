import * as React from 'react'

import DevelopmentScopeCard from './DevelopmentScopeCard'

export default {
  title: 'Components/DevelopmentScopeCard',
  component: DevelopmentScopeCard,
}

const Template = (args) => <DevelopmentScopeCard {...args} />

export const Default = Template.bind({})
Default.args = {}
