import React from 'react'
import clsx from 'clsx'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'
import './careergallerysection.scss'
import { graphql } from 'gatsby'

export const CareerGallerySection = ({ otherClasses, _rawSubText, cards }) => {
  const careerGallerySectionClasses = clsx(
    otherClasses,
    'px-[24px] py-section_py_mob bg-secondary_gray  xl:py-section_py_desk xl:px-[150px]'
  )




  const halfWayIndex = Math.round(cards.length / 3)
  const firstPartOfArray = cards.slice(0, halfWayIndex)
  const secondPartOfArray = cards.slice(halfWayIndex,halfWayIndex+halfWayIndex)
  const thirdPartOfArray = cards.slice(halfWayIndex+halfWayIndex,cards.length)

  return (
    <section
      className={careerGallerySectionClasses}
      data-testid="career-gallery-section"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-[822px] mx-auto">
          <RichText
            richText={_rawSubText}
            otherClasses="text-center gallerysection_heading"
          />
        </div>
        <div className="grid gap-x-5 gap-y-2 grid-cols-3 mt-[40px]">
          <div>
            {firstPartOfArray.map(({ image }) => {
              return (
                <div className="my-5">
                  <Image imageData={image} otherClasses="rounded-lg"></Image>
                </div>
              )
            })}
          </div>
          <div>
            {secondPartOfArray.map(({ image }) => {
              return (
                <div className="my-5">
                  <Image imageData={image} otherClasses="rounded-lg"></Image>
                </div>
              )
            })}
          </div >
          <div>
            {thirdPartOfArray.map(({ image }) => {
              return (
                <div className="my-5">
                  <Image imageData={image} otherClasses="rounded-lg"></Image>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerGallerySection

export const query = graphql`
  fragment CareerGallerySection on SanityCareerGallerySection {
    __typename
    identifier
    _rawSubText
    cards {
      image {
        ...CustomImage
      }
    }
  }
`
