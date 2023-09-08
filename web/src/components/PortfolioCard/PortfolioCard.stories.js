import * as React from 'react'

import PortfolioCard from './PortfolioCard'
import mocks from './mocks'

export default {
  title: 'Components/PortfolioCard',
  component: PortfolioCard,
}

const Template = (args) => <PortfolioCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
