import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { Image } from '../../components/Image'
import { RichText } from '../../components/RichText'
import './aboutglobesection.scss'

export const AboutGlobeSection = ({ otherClasses, _rawText, globeImage }) => {
  const aboutGlobeSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 mx-auto py-section_py_mob  lg:py-section_py_desk'
  )

  return (
    <section
      className={aboutGlobeSectionClasses}
      data-testid="about-globe-section"
    >
      <div className="max-w-[1440px]  px-[24px] lg:px-0  mx-auto">
        <div className="max-w-[888px] mx-auto text-center">
          <RichText richText={_rawText} otherClasses="aboutglobe_text" />
        </div>
        <div className="flex justify-center">
          <Image imageData={globeImage} otherClasses="mt-[47px]" />
        </div>
      </div>
    </section>
  )
}

export default AboutGlobeSection

export const query = graphql`
  fragment AboutGlobeSection on SanityAboutGlobeSection {
    identifier
    __typename
    _rawText
    globeImage {
      ...CustomImage
    }
  }
`
