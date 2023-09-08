import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import './consultationsection.scss'
import Icon from '../../components/Icon/Icon'
import ContactForm from '../../components/ContactForm/ContactForm'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'

export const ConsultationSection = ({
  otherClasses,
  heading,
  _rawSubText,
  isDarkTheme,
  steps,
}) => {
  const consultationSectionClasses = clsx(
    otherClasses,
    'w-full   py-section_py_mob lg:py-section_py_desk',
    isDarkTheme ? 'bg-secondary_gray_300' : 'bg-[#192a35] '
  )

  return (
    <section
      className={consultationSectionClasses}
      data-testid="consultation-section"
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[100px] xl:px-[150px]">
        <div className="w-full mb-8 lg:mb-[56px]">
          <Heading
            type="h2"
            otherClasses="leading-[33px] mb-4 text-[25px] lg:leading-[67.5px] lg:text-[50px] font-bold font-satoshi text-center consultation_section_text_gradient"
          >
            {heading}
          </Heading>
          <div className="consultationsection_rich_text">
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <p className="mb-[56px] lg:mb-10 flex flex-col items-center gap-2 text-white font-satoshi font-bold text-xl ">
          How it works
          <Icon icon="green-arrow-down" iconHeight={24} iconWidth={24} />
        </p>
        <div className="w-full gap-4 mb-8 hidden lg:flex">
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_1 rounded-full relative after:absolute after:right-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
          <div className="w-full border-[1px] border-[#999999] border-dashed consultation_decorator_dashed relative after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>
          <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_2 rounded-full relative after:absolute after:left-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
        </div>
        <div className="lg:hidden rounded-full consultation_mobile_decorator h-[24.25px] w-[1px] mx-auto relative mb-8 after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:bottom-[-16.7px] after:h-4 after:w-4"></div>
        <div className="grid flex-col lg:grid-cols-3 gap-[104.25px] lg:gap-20 xl:gap-[138px] consultation_content_wrapper">
          {steps.map(({ stepHeading, stepText }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 relative  max-w-[288px] mx-auto lg:mx-0 w-full"
              >
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
        <div
          className="lg:hidden  consultation_mobile_decorator_2 h-[40.25px] w-[1px] mx-auto relative mt-4 rounded-full"
        ></div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ConsultationSection

export const query = graphql`
  fragment ContactUsSection on SanityContactUsSection {
    __typename
    identifier
    isDarkTheme
    heading
    _rawSubText
    steps {
      stepHeading
      stepText
    }
  }
`
