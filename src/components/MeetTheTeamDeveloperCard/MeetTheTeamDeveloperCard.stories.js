import * as React from 'react'

import MeetTheTeamDeveloperCard from './MeetTheTeamDeveloperCard'

export default {
  title: 'Components/MeetTheTeamDeveloperCard',
  component: MeetTheTeamDeveloperCard,
}

const Template = (args) => <MeetTheTeamDeveloperCard {...args} />

export const Default = Template.bind({})
Default.args = {}
