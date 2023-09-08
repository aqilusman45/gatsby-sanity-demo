import * as React from 'react'

import SaasToolsSection from './SaasToolsSection'
import mocks from './mocks'

export default {
  title: 'Sections/SaasToolsSection',
  component: SaasToolsSection,
}

const Template = (args) => <SaasToolsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
