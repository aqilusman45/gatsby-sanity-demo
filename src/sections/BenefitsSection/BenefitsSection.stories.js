import * as React from 'react'

import BenefitsSection from './BenefitsSection'
import mocks from './mocks'

export default {
  title: 'Sections/BenefitsSection',
  component: BenefitsSection,
}

const Template = (args) => <BenefitsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
