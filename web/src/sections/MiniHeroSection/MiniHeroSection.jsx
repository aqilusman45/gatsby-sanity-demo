import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'
import RichText from '../../components/RichText/RichText'
import './miniherosection.scss'

export const MiniHeroSection = ({ otherClasses, _rawSubText,isdarkTheme }) => {
  const miniHeroSectionClasses = clsx(otherClasses, ' max-w-[14404px] mx-auto px-6 pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk  lg:px-[100px] xl:px-[140px]' ,isdarkTheme ? 'bg-secondary_gray_300' : 'bg-secondary_gray')

  return (
    <section className={miniHeroSectionClasses} data-testid="mini-hero-section">
      <div className="miniherosection_richtext mx-auto max-w-[1011px]">
        <RichText richText={_rawSubText} />
      </div>
    </section>
  )
}

export default MiniHeroSection

export const query = graphql`
  fragment MiniHeroSection on SanityMiniHeroSections {
    __typename
    identifier
    _rawSubText
    isdarkTheme
  }
`
