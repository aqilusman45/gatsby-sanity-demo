import * as React from 'react'

import CoreValuesSection from './CoreValuesSection'
import mocks from './mocks'

export default {
  title: 'Sections/CoreValuesSection',
  component: CoreValuesSection,
}

const Template = (args) => <CoreValuesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
