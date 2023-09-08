import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import './herosection.scss'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
export const HeroSection = ({ otherClasses, mainHeading, _rawSubText, button }) => {
  const heroSectionClasses = clsx(
    otherClasses,
    'w-full pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk bg-secondary_gray_300 relative overflow-x-clip'
  )

  return (
    <section className={heroSectionClasses} data-testid="hero-section">
      <span className=" hidden lg:block absolute top-[-13.99px] right-[-285.86px]">
        <Icon
          icon="hero-section-decorator"
          iconHeight={592.72}
          iconWidth={665.43}
        />
      </span>
      <div className="max-w-[1011px] px-6 mx-auto w-full">
        {mainHeading && (
          <Heading
            type="h1"
            otherClasses="font-bold text-[35px] lg:text-[70px] leading-[47.25px] lg:leading-[80px] text-center text-white font-satoshi mb-6 lg:mb-8"
          >
            {mainHeading}
          </Heading>
        )}
        {_rawSubText&& 
        <div className='hero_section_richtext'>
          <RichText richText={_rawSubText}/>
        </div>
        }
        <div className="flex justify-center">
          <Button {...button} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

export const query = graphql`
  fragment HeroSection on SanityHeroSections {
    __typename
    identifier
    mainHeading
    button {
      ...Button
    }
    _rawSubText
  }
`
