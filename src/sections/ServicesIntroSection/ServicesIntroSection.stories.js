import * as React from 'react'

import ServicesIntroSection from './ServicesIntroSection'
import mocks from './mocks'

export default {
  title: 'Sections/ServicesIntroSection',
  component: ServicesIntroSection,
}

const Template = (args) => <ServicesIntroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
