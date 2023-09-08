import React from 'react'
import clsx from 'clsx'
import './reasonstochoosesection.scss'
import { BenefitsSectionCard } from '../../components/BenefitsSectionCard'
import VectorImage from '../../images/temp/shape.png'
import RichText from '../../components/RichText/RichText'
import { graphql } from 'gatsby'

export const ReasonsToChooseSection = ({ otherClasses,
  _rawSubText,
  reasons 
 }) => {
  const reasonsToChooseSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 py-[72px] relative'
  )

  // const arr = [
  //   { heading: 'Proven expertise in developing products from scratch' },
  //   { heading: 'Mature delivery processes' },
  //   { heading: 'Skilled developers available to start from tomorrow' },
  //   { heading: 'GDPR and information security regulatory compliance' },
  //   { heading: 'Motivated specialists only' },
  //   { heading: 'Zero tolerance for poor architecture and code quality' },
  // ]

  return (
    <section
      className={reasonsToChooseSectionClasses}
      data-testid="reasons-to-choose-section"
    >
      <img className="absolute left-0 bottom-0 w-52" src={VectorImage} alt="" />
      <div className=" relative container text-center r px-[5%] xl:max-w-[1300px] mx-auto">
        <div className="section-content xl:pb-[80px] pb-[56px] text-center xl:px-[140px] lg:px-[150px]">
          
          <RichText richText={_rawSubText} otherClasses="ReasonsToChooseSection_heading" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[32px] md:gap-x-[32px] reasons_to_choose_content_container z-50">
         
           {reasons.map((nodes) => {
           return (
              <BenefitsSectionCard
                otherClasses="md:text-left rounded-[20px]"
                {...nodes}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReasonsToChooseSection

export const query = graphql`
fragment ReasonsToChooseSection on SanityReasonsToChooseSection {
  __typename
  identifier
  _rawSubText
  reasons {
    heading: text
  }
}`