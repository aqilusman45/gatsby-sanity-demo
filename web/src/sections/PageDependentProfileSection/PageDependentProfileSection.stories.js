import * as React from 'react'

import PageDependentProfileSection from './PageDependentProfileSection'

export default {
  title: 'Sections/PageDependentProfileSection',
  component: PageDependentProfileSection,
}

const Template = (args) => <PageDependentProfileSection {...args} />

export const Default = Template.bind({})
Default.args = {}
