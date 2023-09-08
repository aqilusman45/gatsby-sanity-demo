import * as React from 'react'

import ReasonsToChooseSection from './ReasonsToChooseSection'
import mocks from './mocks'

export default {
  title: 'Sections/ReasonsToChooseSection',
  component: ReasonsToChooseSection,
}

const Template = (args) => <ReasonsToChooseSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
