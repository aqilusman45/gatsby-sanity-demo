import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { Image } from '../../components/Image/Image'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import btn_arrow from '../../images/angleBrackets-icons/arrow_right_alt.svg'
import './corevaluesection.scss'
import CoreValuesCard from '../../components/CoreValuesCard/CoreValuesCard'
import RichText from '../../components/RichText/RichText'

export const CoreValuesSection = ({
  otherClasses,
  heading,
  subText,
  desktopImage,
  mobileImage,
  _rawText,
  cards,
}) => {
  const coreValuesSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray px-[24px] mt-[-221px]'
  )

  return (
    <section
      className={coreValuesSectionClasses}
      data-testid="core-values-section"
    >
      <div className="max-w-[1440px] mx-auto ">
        <div className="max-w-[1140px] relative mx-auto">
          <Image
            imageData={desktopImage}
            otherClasses=" !hidden lg:!block core_value_img min-h-[464px] rounded-[20px] w-full px-[24px]"
          />
           <Image
            imageData={mobileImage}
            otherClasses=" !block lg:!hidden core_value_img min-h-[464px] rounded-[20px] w-full px-[24px]"
          />
          <div className="absolute top-0 px-[32px] py-[32px] md:px-[80px] md:py-[80px] ">
            <Heading otherClasses="Core_value_text mb-[96px] xl:mb-[210px]">
              {heading}
            </Heading>
            <div className="flex flex-col items-center">
              <p className="core_section_subtext">{subText}</p>
              <Button
                otherClasses=" mt-[24px] !rounded-[100px]"
                form='apply-now'
                label={
                  <p className="btn-text flex items-center ">
                    Check Open Roles For You {<img src={btn_arrow}></img>}
                  </p>
                }
                variant="primary"
              ></Button>
            </div>
          </div>

          <div className="xl:mt-[100px] ">
            <div className='flex justify-center items-center xl:mb-[80px] my-[56px]'>

            <RichText richText={_rawText} otherClasses='core_values_rich_text' />
            </div>
            <div className="">
              {cards.map((nodes, index) => {
                return <CoreValuesCard {...nodes} index={index} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValuesSection

export const query = graphql`
fragment CoreValuesSection on SanityCoreValuesSection {
  __typename
  identifier
  heading
  subText
  desktopImage {
    ...CustomImage
  }
  mobileImage {
    ...CustomImage
  }
  _rawText
  cards {
    imagetext
    cardImage {
      ...CustomImage
    }
    _rawSubText
  }
}
`
