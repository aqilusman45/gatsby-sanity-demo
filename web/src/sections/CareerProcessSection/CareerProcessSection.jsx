import React from 'react'
import clsx from 'clsx'
import './careerprocesssection.scss'
import RichText from '../../components/RichText/RichText'
import { graphql } from 'gatsby'

export const CareerProcessSection = ({ otherClasses,_rawText,steps }) => {
  const careerProcessSectionClasses = clsx(
    otherClasses,
    'w-full pt-section_py_mob pb-[70px] lg:py-section_py_desk bg-secondary_gray_300 '
  )

  return (
    <section
      className={careerProcessSectionClasses}
      data-testid="career-process-section"
    >
      <div className='max-w-[1440px] mx-auto flex flex-col justify-center items-center'>
      <div className='career_process_rich_text max-w-[916px] mx-auto lg:px-0 px-6'>
      <RichText  richText={_rawText}  />
      </div>
      <div className='max-w-[1140px] mx-auto'>
      <div className="w-full gap-4 mb-8 hidden lg:flex">
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_1 rounded-full relative after:absolute after:right-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
          <div className="w-full border-[1px] border-[#999999] border-dashed consultation_decorator_dashed relative after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_2 rounded-full relative after:absolute after:left-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
        </div>
        <div className="lg:hidden rounded-full consultation_mobile_decorator h-[24.25px] w-[1px] mx-auto relative mb-8 after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:bottom-[-16.7px] after:h-4 after:w-4"></div>
        <div className="grid flex-col lg:grid-cols-3 gap-[104.25px] lg:gap-20 xl:gap-[138px] consultation_content_wrapper">
          {steps.map(({ stepHeading, stepText },index) => {
            return (
              <div key={index}className="flex flex-col gap-2 relative  max-w-[288px] mx-auto lg:mx-0 w-full">
                <p className="text-base font-bold font-satoshi text-white leading-[21.6px]">
                  {stepHeading}
                </p>
                <p className="text-xs font-normal font-satoshi text-white leading-[16.2px] opacity-50">
                  {stepText}
                </p>
              </div>
            )
          })}
        </div>
        <div className="lg:hidden consultation_mobile_decorator_2 h-[40.25px] w-[1px] mx-auto relative mt-4 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default CareerProcessSection


export const query = graphql`
fragment CareerProcessSection on SanityCareerProcessSection {
  __typename
  identifier
  _rawText
  steps {
    stepText
    stepHeading
  }
}
`