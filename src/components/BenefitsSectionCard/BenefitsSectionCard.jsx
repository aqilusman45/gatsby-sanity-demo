import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import RichText from '../RichText/RichText'
import './benefitssectioncard.scss'

export const BenefitsSectionCard = ({ otherClasses, heading, _rawSubText }) => {
  const benefitsSectionCardClasses = clsx(otherClasses)

  return (
    <div
      className={benefitsSectionCardClasses}
      data-testid="benefits-section-card"
    >
      <div className="md:max-w-[358.5px] w-full px-[30px] py-[30px] bg-secondary_gray benefits-card">
        <Heading
          type="h6"
          className={clsx(
            'leading-[24.3px]  text-light_white',
            _rawSubText ? 'mb-[24px]' : ''
          )}
        >
          {heading}
        </Heading>
        {_rawSubText && (
          <RichText
            richText={_rawSubText}
            otherClasses="benefits_card_rich_text"
          />
        )}
      </div>
    </div>
  )
}

export default BenefitsSectionCard
