import * as React from 'react'

import ContactFormModal from './ContactFormModal'

export default {
  title: 'Components/ContactFormModal',
  component: ContactFormModal,
}

const Template = (args) => <ContactFormModal {...args} />

export const Default = Template.bind({})
Default.args = {}
