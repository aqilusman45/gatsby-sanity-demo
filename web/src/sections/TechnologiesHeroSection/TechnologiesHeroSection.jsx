import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import RichText from '../../components/RichText/RichText'
import Button from '../../components/Button/Button'
import Stats from '../../components/Stats/Stats'

import { graphql } from 'gatsby'
import { Image } from '../../components/Image'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './technologiesherosection.scss'

export const TechnologiesHeroSection = ({
  mainHeading,
  _rawSubText,
  desktopImage,
  mobileImage,
  button,
  cards,
  otherClasses,
}) => {
  const technologiesHeroSectionClasses = clsx(
    otherClasses,
    'w-full pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk bg-secondary_gray_300 relative overflow-x-clip'
  )


  const [entered, setEntered] = useState(false)

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to('.client_main_container_selector', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#fast-facts',
        start: 'top 90%',
        end: 'bottom 60%',
        onEnter: () => {
          setEntered(true)
        },
      },
    })
  }, [])

  return (
    <section
      className={technologiesHeroSectionClasses}
      data-testid="technologies-hero-section"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-center items-center">
        <div className="flex gap-[56px] lg:gap-[133px]  flex-col lg:flex-row items-center px-6 lg:px-[100px] xl:px-[150px] w-full">
          <div className="w-full lg:w-[568px] flex flex-col items-center lg:items-start">
            {mainHeading && (
              <Heading
                type="h1"
                otherClasses="font-bold text-[35px]  lg:text-left lg:text-[70px] leading-[47.25px] lg:leading-[80px] text-center text-white font-satoshi mb-6 lg:mb-8"
              >
                {mainHeading}
              </Heading>
            )}
            {_rawSubText && (
              <div className="technologies_hero_section_richtext">
                <RichText richText={_rawSubText} />
              </div>
            )}
            <div className="flex justify-left">
              <Button {...button} />
            </div>
          </div>

          <div className="w-full lg:w-[439px]">
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
                otherClasses="w-full h-[300px] md:h-[400px] !block lg:!hidden"
              />
            )}
          </div>
        </div>
        {cards && (
          <div
            className="w-full bg-secondary_gray_300  pt-[91px] lg:pt-[120px]"
            data-testid="technologies-hero-section-stats-section"
            id="fast-facts"
          >
            <div className={clsx("client_main_container_selector  mx-auto w-full gap-y-8 gap-x-0 lg:px-0 px-6 flex lg:flex-row flex-col justify-center lg:justify-between items-center",cards.length>3?'md:grid-cols-4 max-w-[1000px]': 'md:grid-cols-3 max-w-[800px]')}>
              {cards?.map((nodes, index) => {
                return <Stats {...nodes} key={index} entered={entered} />
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TechnologiesHeroSection

export const query = graphql`
  fragment TechnologyHeroSection on SanityTechnologiesHeroSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    desktopImage {
      ...CustomImage
    }
    mobileImage {
      ...CustomImage
    }
    button {
      ...Button
    }
    cards {
      count
      labels
    }
  }
`
