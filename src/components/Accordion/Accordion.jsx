import React, { useState } from 'react'
import clsx from 'clsx'

import './accordion.scss'
import RichText from '../RichText'
export const Accordion = ({ otherClasses, questionText, _rawAnswer,isDarkTheme }) => {
  const [active, setActive] = useState(false)
  const accordionClasses = clsx(
    otherClasses,
    'w-full  px-8 rounded-[20px]',!isDarkTheme?'bg-secondary_gray_300':'bg-light-gradient'
  )

  const toggleActive = (active) => {
    setActive(!active)
  }
  return (
    <div className={accordionClasses} data-testid="accordion">
      <div>
        <button
          onClick={() => toggleActive(active)}
          className={clsx(
            'w-full text-white flex items-start justify-between text-left items-center cursor-pointer text-[18px] leading-[24px] font-satoshi font-bold',
            active ? 'pt-8 pb-4 ':'py-8'
          )}
        >
          {questionText}
          <div
            className={clsx(
              'w-6 cursor-pointer h-6',
              active ? '!hidden' : '!block'
            )}
          >
            <span className="faqs_plus_icon bg-white"></span>
          </div>
          <div
            className={clsx(
              'w-6 cursor-pointer h-6',
              active ? '!block' : '!hidden'
            )}
          >
            <span className="faqs_minus_icon bg-white"></span>
          </div>
        </button>
      </div>
      <div
        className={clsx(
          'overflow-hidden accordion_rich_text',
          active ? 'h-auto active_accordian_text' : 'h-0'
        )}
      >
        <RichText richText={_rawAnswer} />
      </div>
    </div>
  )
}

export default Accordion
