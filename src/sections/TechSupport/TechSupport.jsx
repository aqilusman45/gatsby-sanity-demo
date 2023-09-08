import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import CheckBox from '../../components/CheckBox'

import './techsupport.scss'
import RichText from '../../components/RichText/RichText'

export const TechSupport = ({ otherClasses, _rawSubText, cards }) => {
  const techSupportClasses = clsx(otherClasses, 'bg-secondary_gray ')
  return (
    <section className={techSupportClasses} data-testid="tech-support">
      <div className="max-w-[1440px] mx-auto">
        <div className="pt-[72px] max-w-[716px]  lg:max-w-[600px]  xl:py-[87.5px] pb-[72px] mx-[24px] md:mx-auto lg:mx-auto xl:mx-auto text-center ">
          <RichText
            richText={_rawSubText}
            otherClasses="tech_support_rich_text"
          />
        </div>
        <div className="pb-[72.5px]  xl:px-[150px] lg:px-[100px]">
          <div className="w-full gap-2 mb-8 hidden lg:flex">
            <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_1 rounded-full relative after:absolute after:right-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
            <div className="w-full border-[1px] border-[#999999] border-dashed consultation_decorator_dashed relative after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>
            <span className="h-[1px] w-[84px] min-w-[84px] consultation_decorator_line_2 rounded-full relative after:absolute after:left-[-16.7px] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></span>
          </div>
          <div className="lg:hidden rounded-full consultation_mobile_decorator h-[24.25px] w-[1px] mx-auto relative mb-8 after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:bottom-[-16.7px] after:h-4 after:w-4"></div>

          <div className="grid flex-col lg:grid-cols-3 support_sec_packages gap-[100.25px] lg:gap-[155px] xl:gap-[140px] ">
            {cards.map(({ heading, services }) => {
              return (
                <div className="flex mt-[15px] flex-col gap-2 relative  max-w-[288px] mx-auto lg:mx-0 w-full">
                  <h6 className="text-base font-bold font-satoshi text-white leading-[21.6px] mb-[25px]">
                    {heading}
                  </h6>
                  {services?.list?.map(( node ) => {
                    return (
                      <div className="flex gap-[11px] pb-[10px]">
                        <CheckBox isChecked={true} />
                        <p className="text-[14px] font-medium font-satoshi text-white leading-[19px] opacity-50">
                          {node}
                        </p>
                      </div>
                    )
                  })}
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

export default TechSupport

export const query = graphql`
  fragment TechSupportSection on SanityTechSupportSections {
    __typename
    identifier
    _rawSubText
    cards {
      heading
      services {
        list
      }
    }
  }
`
