import * as React from 'react'

import ClientsSection from './ClientsSection'
import mocks from './mocks'

export default {
  title: 'Sections/ClientsSection',
  component: ClientsSection,
}

const Template = (args) => <ClientsSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
