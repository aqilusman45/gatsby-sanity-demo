import React from 'react'
import Sprite from './src/images/sprite.inline.svg'
import './src/styles/global.scss'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      {element}
      <Sprite />
    </>
  )
}
