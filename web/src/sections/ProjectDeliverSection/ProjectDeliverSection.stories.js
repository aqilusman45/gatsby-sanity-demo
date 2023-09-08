import * as React from 'react'

import ProjectDeliverSection from './ProjectDeliverSection'
import mocks from './mocks'

export default {
  title: 'Sections/ProjectDeliverSection',
  component: ProjectDeliverSection,
}

const Template = (args) => <ProjectDeliverSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
