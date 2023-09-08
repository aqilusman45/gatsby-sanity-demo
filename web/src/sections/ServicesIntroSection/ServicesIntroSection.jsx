import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './servicesIntrosection.scss'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'
import ServicesIntroCard from '../../components/ServicesIntroCard/ServicesIntroCard'
import { graphql } from 'gatsby'
import Button from '../../components/Button/Button'
import TabsSlider from '../../components/TabsSlider/TabsSlider'

export const ServicesIntroSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
  isdarkTheme,
  ctaText,
  button,
}) => {
  const servicesIntroSectionClasses = clsx(
    otherClasses,
    'py-section_py_mob lg:py-section_py_desk',
    isdarkTheme ? 'bg-secondary_gray_300' : 'bg-secondary_gray'
  )
  const allTabs = [
    ...new Set(cards.map(({ tabName: { category } }) => category)),
  ]
  const [defaultResponse, setDefaultResponse] = useState(null)
  const [tabs, settabs] = useState(allTabs[0])
  const tabsHandler = (type) => {
    settabs(type)
  }

  const tabsSettings = {
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
    ],
  }
  
  useEffect(() => {
    const found = cards.find(({ tabName: { category } }) => category === tabs)

    setDefaultResponse(found)
    return
  }, [tabs, cards])

  
  return (
    <section
      className={servicesIntroSectionClasses}
      data-testid="services-intro-section"
    >
      <div className="max-w-[1440px]  px-6 lg:px-0 mx-auto w-full flex flex-col items-center   opacity-90">
       
        <div className="mx-auto mb-[30px] max-w-[849px] text-center">
          <Heading
            type="h2"
            otherClasses="mb-4 why_angle_bracket_text_gradient text-[25px] font-satoshi font-bold leading-[33.75px] lg:leading-[68px] lg:text-[50px]"
          >
            {mainHeading}
          </Heading>
          <RichText
            richText={_rawSubText}
            otherClasses="introsection_rich_text "
          />
        </div>
        <div className="services-introsection-container w-full ">
          <div className=" pt-4 pb-16 max-w-[700px] px-[60px] lg:px-0 mx-auto ">
            <TabsSlider 
            customSettings={tabsSettings}
            otherClasses='flex items-center gap-4 mb-[56px] lg:mb-20  lg:pb-0 tabssroll_team'>
              {allTabs.map((node, index) => {
                return (
                  <div className="mt-[4px] px-[4px] lg:px-[8px]">
                    <button
                      key={index}
                      onClick={() => tabsHandler(node)}
                      className={clsx(
                        'text-[13px] shadow-3xl  w-full h-12 lg:h-8 py-[4px] px-[8px] flex items-center justify-center rounded-full font-satoshi text-light_white opacity-70 leading-[22px] text-center',
                        defaultResponse
                          ? defaultResponse?.tabName.category === node
                            ? 'bg-primary_green text-secondary_gray opacity-100 font-bold'
                            : 'font-normal  bg-white/[.05]'
                          : cards[0]?.tabName.category === node
                          ? 'bg-primary_green text-secondary_gray opacity-100 font-bold'
                          : 'font-normal  bg-white/[.05]'
                      )}
                    >
                      {node}
                    </button>
                  </div>
                )
              })}
            </TabsSlider>
          </div>
        </div>

  


        <div className="lg:px-[100px] xl:px-[150px]">
          <ServicesIntroCard
            isdarkTheme={isdarkTheme}
            otherClasses=""
            {...defaultResponse}
          />
        </div>

        {ctaText && (
          <>
            <div className="w-full  gap-4 px-[24px] lg:flex">
              <div className="w-full max-w-[1140px] mt-[100px] md:mt-[72px] mx-auto border-[1px] border-[#00ED64] opacity-20 border-dashed  relative after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>{' '}
            </div>
            <div className=" max-w-[1140px] gap-10 lg:gap-0 w-full flex items-center mx-auto lg:px-0 px-[24px] justify-between mt-[48px]  flex-col sm:flex-row">
              <p className="text-[20px] leading-[30px] font-bold font-satoshi capitalize text-white">
                {ctaText}
              </p>
              <Button
                {...button}
                otherClasses=" whitespace-nowrap max-w-fit qualityassurance_footerbutton"
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ServicesIntroSection

export const query = graphql`
  fragment ServicesIntroSection on SanityServicesIntroSection {
    __typename
    identifier
    mainHeading
    isdarkTheme
    ctaText
    button {
      ...Button
    }
    _rawSubText
    cards {
      tabName {
        category
      }
      logo {
        ...CustomImage
      }
      heading
      checklist {
        list
      }
      _rawSubText
      _rawText
      imagesCards {
        identifier
        image {
          ...CustomImage
        }
      }
    }
  }
`
