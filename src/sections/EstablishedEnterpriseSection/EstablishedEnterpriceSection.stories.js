import * as React from 'react'

import EstablishedEnterpriceSection from './EstablishedEnterpriceSection'
import mocks from './mocks'

export default {
  title: 'Sections/EstablishedEnterpriceSection',
  component: EstablishedEnterpriceSection,
}

const Template = (args) => <EstablishedEnterpriceSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
