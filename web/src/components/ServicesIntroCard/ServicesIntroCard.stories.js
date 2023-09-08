import * as React from 'react'

import ServicesIntroCard from './ServicesIntroCard'
import mocks from './mocks'

export default {
  title: 'Components/ServicesIntroCard',
  component: ServicesIntroCard,
}

const Template = (args) => <ServicesIntroCard {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
