import * as React from 'react'

import Image from './Image'
import { imageData } from './mocks'

export default {
  title: 'Components/Image',
  component: Image,
}

const Template = (args) => <Image {...args} otherClasses ="w-[400px] h-[40s0px]" />

export const Default = Template.bind({})
Default.args = {
  imageData,
}
