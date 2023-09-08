import * as React from 'react'

import AngleBracketsDevelopers from './AngleBracketsDevelopers'
import mocks from './mocks.js'

export default {
  title: 'Sections/AngleBracketsDevelopers',
  component: AngleBracketsDevelopers,
}

const Template = (args) => <AngleBracketsDevelopers {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
