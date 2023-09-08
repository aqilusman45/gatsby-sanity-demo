import * as React from 'react'

import BenefitsSectionCard from './BenefitsSectionCard'

export default {
  title: 'Components/BenefitsSectionCard',
  component: BenefitsSectionCard,
}

const Template = (args) => <BenefitsSectionCard {...args} />

export const Default = Template.bind({})
Default.args = {}
