import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import Heading from '../../components/Heading'
import Accordion from '../../components/Accordion'
import './faqssection.scss'
import { RichText } from '../../components/RichText'
import Icon from '../../components/Icon/Icon'

export const FaQsSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  isDarkTheme,
  faqs,
}) => {
  const faQsSectionClasses = clsx(
    otherClasses,
    'relative  py-section_py_mob lg:py-section_py_desk',
    isDarkTheme ? 'bg-secondary_gray_300' : 'bg-secondary_gray'
  )

  return (
    <section className={faQsSectionClasses} data-testid="fa-qs-section">
      <span className=" hidden lg:block absolute top-0 right-0">
        <Icon icon="faqs-corner-icon" iconHeight={460} iconWidth={460} />
      </span>
      <div className="max-w-[1440px] mx-auto w-full ">
        <div className=" px-6 md:px-6 flex flex-col justify-center items-center mx-auto max-w-[822px] mb-[80px] ">
          <Heading
            type="h2"
            otherClasses="mb-4 text-center why_angle_bracket_text_gradient text-[25px] font-satoshi font-bold leading-[33.75px] lg:leading-[68px] lg:text-[50px]"
          >
            {mainHeading}
          </Heading>
          <div className="faqssection_richtext">
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <div className=" px-6 md:px-6  flex flex-col gap-4 max-w-[1140px] mx-auto">
          {faqs.map((nodes, index) => {
            return (
              <Accordion isDarkTheme={isDarkTheme} key={index} {...nodes} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaQsSection

export const query = graphql`
  fragment FAQsSection on SanityFaqsSections {
    __typename
    isDarkTheme
    identifier
    mainHeading
    _rawSubText
    faqs {
      questionText
      _rawAnswer
    }
  }
`
