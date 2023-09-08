import clsx from 'clsx'
import React from 'react'

export const Icon = ({
  icon,
  iconHeight = 26,
  iconWidth = 26,
  iconColor,
  otherClasses,
  ...props
}) => {
  return (
    <svg
      data-testid="icon"
      className={clsx(otherClasses, '')}
      fill={iconColor}
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconWidth} ${iconHeight}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  )
}

export default Icon
