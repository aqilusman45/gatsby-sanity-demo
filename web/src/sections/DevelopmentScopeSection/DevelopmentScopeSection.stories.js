import * as React from 'react'

import DevelopmentScopeSection from './DevelopmentScopeSection'
import mocks from './mocks'

export default {
  title: 'Sections/DevelopmentScopeSection',
  component: DevelopmentScopeSection,
}

const Template = (args) => <DevelopmentScopeSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
