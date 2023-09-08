import * as React from 'react'

import AboutGlobeSection from './AboutGlobeSection'
import mocks from './mocks'

export default {
  title: 'Sections/AboutGlobeSection',
  component: AboutGlobeSection,
}

const Template = (args) => <AboutGlobeSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
