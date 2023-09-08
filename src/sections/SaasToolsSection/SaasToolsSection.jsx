import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import './sasstoolssection.scss'

export const SaasToolsSection = ({
  otherClasses,
  action,
  mainHeading,
  _rawSubText,
  cards,
  tabCards,
}) => {
  const saasToolsSectionClasses = clsx(
    otherClasses,
    action === 'normal' ? 'bg-secondary_gray_300' : 'bg-secondary_gray'
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    if (action === 'tabs') {
      const allTabsData = tabCards.filter(
        (node) => tabCards[0].tabName === node.tabName
      )
      setData(allTabsData)
    }
  }, [action, tabCards])

  const toggleFilter = (tabName, index) => {
    setActiveIndex(index)
    const allTabsData = tabCards.filter((node) => tabName === node.tabName)
    setData(allTabsData)
  }

  return (
    <section
      className={saasToolsSectionClasses}
      data-testid="saas-tools-section"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center justify-center py-[72px]  lg:py-[100px]">
        <div className="max-w-[827px] mx-auto px-[24px] lg:px-0">
          <Heading
            type="h4"
            otherClasses="heading_gradient text-[25px] leading-[34px] lg:text-[50px] lg:leading-[68px] font-bold "
          >
            {mainHeading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="sass_tools_section_rich_text"
          />
        </div>
        {action === 'normal' && (
          <div className=" max-w-[940px] px-[24px] lg:px-0 flex-wrap mx-auto justify-center items-center flex flex-row gap-y-[34px] gap-x-[165px] mt-[50px] lg:mt-[80px]">
            {cards.map(({ image, identifier }) => {
              return (
                <div className="flex flex-col gap-2 opacity-50">
                  <Image imageData={image} otherClasses="w-[50px] h-[50px]" />
                  <p className="text-xs leading-4 font-satoshi font-medium text-white ">
                    {identifier}
                  </p>
                </div>
              )
            })}
          </div>
        )}
        {action === 'tabs' && (
          <>
            <div className=" w-full mx-auto overflow-auto sasstools_sroll px-[24px]">
              <div className=" mt-[32px] lg:mt-[48px] flex gap-4 custom_center  md:justify-center lg:mb-20  pb-8 lg:pb-0 ">
                {[...new Set(tabCards.map(({ tabName }) => tabName))].map(
                  (node, index) => {
                    return (
                      <button
                        onClick={() => toggleFilter(node, index)}
                        key={index}
                        className={clsx(
                          'text-base font-satoshi leading-[21.6px] py-[13px] px-[30px] rounded-full whitespace-nowrap',
                          activeIndex === index
                            ? 'bg-primary_green text-secondary_gray font-bold'
                            : 'bg-[#FFFFFF0D] text-[#91999F]  font-normal '
                        )}
                      >
                        {node}
                      </button>
                    )
                  }
                )}
              </div>
            </div>
            <div className=" max-w-[940px] px-[24px] lg:px-0 flex-wrap mx-auto justify-center items-center flex flex-row gap-y-[34px] gap-x-[120px] ">
              {data.map(({ logo, name }) => {
                return (
                  <div className="flex flex-col gap-2 opacity-50">
                    <Image imageData={logo} otherClasses="w-[50px] h-[50px]" />
                    <p className="text-xs leading-4 font-satoshi font-medium text-white ">
                      {name}
                    </p>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default SaasToolsSection

export const query = graphql`
  fragment SassToolsSection on SanitySaasToolsSections {
    __typename
    identifier
    _rawSubText
    action
    mainHeading
    tabCards {
      tabName
      name
      logo {
        ...CustomImage
      }
    }
    cards {
      identifier
      image {
        ...CustomImage
      }
    }
  }
`
