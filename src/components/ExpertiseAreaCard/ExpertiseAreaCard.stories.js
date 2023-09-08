import * as React from 'react'

import ExpertiseAreaCard from './ExpertiseAreaCard'

export default {
  title: 'Components/ExpertiseAreaCard',
  component: ExpertiseAreaCard,
}

const Template = (args) => <ExpertiseAreaCard {...args} />

export const Default = Template.bind({})
Default.args = {}
