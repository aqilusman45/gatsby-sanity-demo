import * as React from 'react'

import QualityAssuranceSection from './QualityAssuranceSection'
import mocks from './mocks'

export default {
  title: 'Sections/QualityAssuranceSection',
  component: QualityAssuranceSection,
}

const Template = (args) => <QualityAssuranceSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
