import * as React from 'react'

import CareerGallerySection from './CareerGallerySection'
import mocks from './mocks'

export default {
  title: 'Sections/CareerGallerySection',
  component: CareerGallerySection,
}

const Template = (args) => <CareerGallerySection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
