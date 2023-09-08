import * as React from 'react'

import PortfolioSection from './PortfolioSection'
import mocks from './mocks'

export default {
  title: 'Sections/PortfolioSection',
  component: PortfolioSection,
}

const Template = (args) => <PortfolioSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
