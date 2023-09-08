import React from 'react'
import clsx from 'clsx'

import './sheduleforconsulting.scss'
import { graphql } from 'gatsby'
import Button from '../../components/Button/Button'
import { RichText } from '../../components/RichText'
import { Image } from '../../components/Image'

export const SheduleForConsultation = ({
  mainHeading,
  _rawSubText,
  labelText,
  mobileImage,
  desktopImage,
  button,
  otherClasses,
}) => {
  const sheduleForConsultationClasses = clsx(
    otherClasses,
    'w-full bg-secondary_gray'
  )

  return (
    <section
      className={sheduleForConsultationClasses}
      data-testid="shedule-for-consultation"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center text-center lg:gap-10 xl:gap-20 lg:text-left justify-center  px-6 py-section_py_mob lg:py-section_py_desk lg:px-[100px] xl:px-[150px]">
        <div className="w-full">
          {_rawSubText && (
            <div className="shedule_for_consultation_richtext why_angle_bracket_text_gradient w-full mb-[56px] lg:mb-[116px] ">
              <RichText richText={_rawSubText} />
            </div>
          )}
          <div className=" hidden lg:block">
            {labelText && (
              <p className="font-satoshi font-normal text-base leading-[22px] text-light_white mb-6">
                Want To Maximize Your Online Reach And Conversion Rates?
              </p>
            )}
            <div className="flex justify-left">
              <Button
                {...button}
                otherClasses="schedule_for_consultation_button font-satoshi font-bold text-secondary_gray_300 cursor-pointer text-base leading-[22px]"
              />
            </div>
          </div>
        </div>

        <div className=" mb-[58px] lg:mb-0 min-w-[280px] max-w-[448.45px] w-full h-fit">
          {desktopImage && (
            <Image
              imageData={desktopImage}
              otherClasses="w-full !hidden lg:!block"
            />
          )}
          {mobileImage && (
            <Image
              imageData={mobileImage}
              objectFit="contain"
              otherClasses="w-full  !block lg:!hidden"
            />
          )}
        </div>

        <div className="block lg:hidden">
          {labelText && (
            <p className="font-satoshi font-normal text-base leading-[22px] text-light_white mb-6">
              Want To Maximize Your Online Reach And Conversion Rates?
            </p>
          )}
          <div className="flex justify-left">
            <Button
              {...button}
              otherClasses="schedule_for_consultation_button font-satoshi text-secondary_gray_300 cursor-pointer font-bold text-base leading-[22px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SheduleForConsultation

export const query = graphql`
  fragment FrontEndConsultation on SanitySheduleForConsultation {
    __typename
    identifier
    mainHeading
    _rawSubText
    labelText
    mobileImage {
      ...CustomImage
    }
    desktopImage {
      ...CustomImage
    }
    button {
      ...Button
    }
  }
`
