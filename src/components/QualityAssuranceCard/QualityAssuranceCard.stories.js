import * as React from 'react'

import QualityAssuranceCard from './QualityAssuranceCard'

export default {
  title: 'Components/QualityAssuranceCard',
  component: QualityAssuranceCard,
}

const Template = (args) => <QualityAssuranceCard {...args} />

export const Default = Template.bind({})
Default.args = {}
