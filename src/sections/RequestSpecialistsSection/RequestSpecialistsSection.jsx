import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import './requestspecialistssection.scss'
import Button from '../../components/Button/Button'
import Image from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'

export const RequestSpecialistsSection = ({
  otherClasses,
  button,
  image,
  _rawSubText,
  text,
  cards
}) => {
  const requestSpecialistsSectionClasses = clsx(
    otherClasses,
    'mx-auto bg-secondary_gray_300'
  )

  return (
    <section
      className={requestSpecialistsSectionClasses}
      data-testid="request-specialists-section"
    >
      <div className="w-full bg-secondary_gray_300 max-w-[1440px] mx-auto flex flex-col lg:flex-row  text-center lg:gap-10 xl:gap-20 lg:text-left items-center justify-center py-[72px] px-6 lg:py-[120px] lg:px-[100px] xl:px-[150px]">
        <div className="w-full lg:order-2 order-1">
          <div className="w-full mb-[56px] lg:mb-[116px] ">
            <RichText
              otherClasses="request_specialist_section_rich_text"
              richText={_rawSubText}
            />
          </div>
          <div className=" hidden lg:block">
            <p className="font-satoshi font-normal text-base leading-[22px] text-light_white mb-6">
              {text}
            </p>
            <Button {...button} />
          </div>
        </div>
        <div className=" h-fit mb-[58px] lg:mb-0 min-w-[280px]   lg:order-1 order-2 max-w-[448.45px] w-full">
          <Image imageData={image} otherClasses="!w-full" objectFit="contain" />
        </div>
        <div className=" block md:hidden sm:hidden lg:hidden">
          <p className="font-satoshi font-normal text-base leading-[22px] text-light_white mb-6">
            {text}
          </p>
          <Button {...button} />
        </div>
      </div>
      <div className="bg-secondary_gray_300 lg:px-[100px] xl:px-[150px] max-w-[1440px] mx-auto xl:py-[]">
        <div className="w-full gap-[1px] mb-8 hidden lg:flex">
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_1 rounded-full relative after:absolute after:right-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
          <div className="w-full border-[1px] border-[#999999] border-dashed consultation_decorator_dashed relative after:absolute after:left-2/3 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>
          <div className="w-full border-[1px] border-[#999999] border-dashed consultation_decorator_dashed relative after:absolute after:left-1/3 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_2 rounded-full relative after:absolute after:left-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
        </div>
        <div className="lg:hidden rounded-full consultation_mobile_decorator h-[24.25px] w-[1px] mx-auto relative mb-8 after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:bottom-[-16.7px] after:h-4 after:w-4"></div>
        <div className="bg-secondary_gray_300 lg:pb-[120px]  sm:text-center  grid  flex-col lg:grid-cols-4 gap-[104.25px] lg:gap-20 xl:gap-[138px] request_content_wrapper">
          {cards.map(({ stepHeading, stepText }) => {
            return (
              <div className="flex request_content flex-col gap-2 relative  max-w-[288px] mx-auto lg:mx-0 w-full">
                <h6 className="text-base font-bold font-satoshi text-white leading-[21.6px]">
                  {stepHeading}
                </h6>
                <p className="text-xs font-normal font-satoshi text-white leading-[16.2px] opacity-50">
                  {stepText}
                </p>
              </div>
            )
          })}
        </div>
        <div className="lg:hidden consultation_mobile_decorator_2 h-[40.25px] w-[1px] mx-auto relative mt-4 rounded-full"></div>
        <div className=" flex flex-col  items-center pt-[56px] pb-[72px] lg:hidden text-center">
          <p className="font-satoshi font-normal text-base leading-[22px] text-light_white mb-6">
            {text}
          </p>
          <Button {...button} />
        </div>
      </div>
    </section>
  )
}

export default RequestSpecialistsSection

export const query = graphql`
  fragment RequestSpecialistSection on SanityRequestSpecialistSection {
    __typename
    identifier
    button {
      ...Button
    }
    _rawSubText
    text
    image {
      ...CustomImage
    }
    cards {
      stepHeading
      stepText
    }
  }
`
