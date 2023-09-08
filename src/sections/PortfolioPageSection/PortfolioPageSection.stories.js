import * as React from 'react'

import PortfolioPageSection from './PortfolioPageSection'
import mocks from './mocks'

export default {
  title: 'Sections/PortfolioPageSection',
  component: PortfolioPageSection,
}

const Template = (args) => <PortfolioPageSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
