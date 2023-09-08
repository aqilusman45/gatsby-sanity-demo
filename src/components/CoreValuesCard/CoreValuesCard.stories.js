import * as React from 'react'

import CoreValuesCard from './CoreValuesCard'

export default {
  title: 'Components/CoreValuesCard',
  component: CoreValuesCard,
}

const Template = (args) => <CoreValuesCard {...args} />

export const Default = Template.bind({})
Default.args = {}
