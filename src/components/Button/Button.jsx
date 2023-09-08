import React from 'react'
import { graphql, Link } from 'gatsby'
import clsx from 'clsx'

import './button.scss'
import Icon from '../Icon/Icon'

export const Button = ({
  label = '',
  variant = 'primary',
  otherClasses,
  form,
  slug,
  onClick,
  isDisable,
  externalLink,
  isExitIcon,
}) => {
  const buttonClasses = clsx(
    otherClasses,
    variant === 'primary' &&
      `px-4 flex gap-2 w-fit justify-center items-center py-[10.5px] text-sm leading-[18.9px] text-center font-bold font-satoshi bg-primary_green rounded-[5px] button_primary_box_shadow`,
    variant === 'secondary' &&
      `py-3 px-[22px] rounded-full bg-[#ffffff0d] font-satoshi font-medium text-base leading-[21.6px] text-light_white flex items-center gap-2 button_secondary_box_shadow`,
    variant === 'tertiary' &&
      'bg-primary_green font-satoshi text-secondary_gray_300 flex gap-2  px-[22px] py-3 rounded-full cursor-pointer font-bold text-base leading-[22px] button_tertiary',
    variant === 'textlink' &&
      'font-satoshi text-primary_green flex underline px-[22px] py-3 rounded-full cursor-pointer font-bold text-base leading-[22px] '
  )

  const withIcon = variant === 'secondary'
  const withIconTertiary = variant === 'tertiary'
  const withIconTextLink = variant === 'textlink'


  if (slug && !form) {
    const { current } = slug
    return (
      <>
        {externalLink ? (
          <a
            href={`${current}`}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={buttonClasses}
          >
            {label}
            {withIcon && (
              <Icon icon="arrow-right-white" iconHeight={24} iconWidth={24} />
            )}
            {withIconTextLink && (
              <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} />
            )}
            {isExitIcon && (
              <Icon icon="exit-icon" iconHeight={24} iconWidth={24} />
            )}
            {withIconTertiary && (
              <Icon icon="arrow_right_dark" iconHeight={24} iconWidth={24} />
            )}
          </a>
        ) : (
          <Link to={`/${current}`} className={buttonClasses}>
            {label}
            {withIcon && (
              <Icon icon="arrow-right-white" iconHeight={24} iconWidth={24} />
            )}
            {withIconTextLink && (
              <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} />
            )}
            {isExitIcon && (
              <Icon icon="exit-icon" iconHeight={24} iconWidth={24} />
            )}
            {withIconTertiary && (
              <Icon icon="arrow_right_dark" iconHeight={24} iconWidth={24} />
            )}
          </Link>
        )}
      </>
    )
  }


  if (!slug && form) {
    return (
          <Link to={`#${form}`} className={buttonClasses}>
            {label}
            {withIcon && (
              <Icon icon="arrow-right-white" iconHeight={24} iconWidth={24} />
            )}
            {withIconTextLink && (
              <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} />
            )}
            {isExitIcon && (
              <Icon icon="exit-icon" iconHeight={24} iconWidth={24} />
            )}
            {withIconTertiary && (
              <Icon icon="arrow_right_dark" iconHeight={24} iconWidth={24} />
            )}
          </Link>
    )
  }
  return (
    <button
      onClick={(e) => {
        onClick && onClick(form, e)
      }}
      className={buttonClasses}
      data-testid="button"
      disabled={isDisable}
    >
      {label}
      {withIcon && (
        <Icon icon="arrow-right-white" iconHeight={24} iconWidth={24} />
      )}
      {withIconTextLink && (
        <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} />
      )}
      {isExitIcon && <Icon icon="exit-icon" iconHeight={24} iconWidth={24} />}
      {withIconTertiary && (
        <Icon icon="arrow_right_dark" iconHeight={24} iconWidth={24} />
      )}
    </button>
  )
}

export default Button

export const query = graphql`
  fragment Button on SanityButton {
    label
    variant
    action
    externalLink
    form
    slug {
      current
    }
  }
`
