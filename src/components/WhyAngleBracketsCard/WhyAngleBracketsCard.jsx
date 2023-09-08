import React from 'react'
import clsx from 'clsx'
import './whyanglebracketscard.scss'
import Heading from '../Heading/Heading'
import { Image } from '../Image'
import { RichText } from '../RichText'
import Icon from '../Icon/Icon'
export const WhyAngleBracketsCard = ({
  otherClasses,
  image,
  heading,
  subText,
  type,
  buttonTitle,
}) => {
  const whyAngleBracketsCardClasses = clsx(
    otherClasses,
    'why_angle_brackets_bg_gradient w-full  p-[30px] rounded-[20px]'
  )

  return (
    <div
      className={whyAngleBracketsCardClasses}
      data-testid="why-angle-brackets-card"
    >
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <Image
          imageData={image}
          objectFit="fill"
          otherClasses="w-[78px] h-[78px] max-w-[78px] max-h-[78px] mb-6"
        />
        <Heading
          type="h6"
          otherClasses="font-bold font-satoshi leading-[24.3px] text-white text-lg mb-4"
        >
          {heading}
        </Heading>
        <p className="whyuscard_richtext">{subText}</p>
        {type === 'secondary' && (
          <div className="flex items-center justify-end mt-6 mb-[30px] gap-2">
            {buttonTitle && (
              <button className="bg-transparent text-white text-base font-semibold font-satoshi">
                {buttonTitle}
              </button>
            )}
            <Icon icon="arrow-up" iconHeight={24} iconWidth={24} />
          </div>
        )}
      </div>
    </div>
  )
}

export default WhyAngleBracketsCard
