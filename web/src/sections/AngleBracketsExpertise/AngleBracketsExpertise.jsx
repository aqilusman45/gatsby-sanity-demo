import React from 'react'
import clsx from 'clsx'

import Icon from '../../components/Icon/Icon'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import { graphql } from 'gatsby'
import './anglebracketsexpertise.scss'
import RichText from '../../components/RichText/RichText'
import Image from '../../components/Image/Image'

export const AngleBracketsExpertise = ({
  otherClasses,
  _rawSubText,
  image,
  technologyHeading,
  logos,
  _rawTechnologyText,
  button,
  toggleFunc,
}) => {
  const angleBracketsExpertiseClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 w-full py-section_py_mob lg:py-section_py_desk'
  )
  return (
    <section
      className={angleBracketsExpertiseClasses}
      data-testid="angle-brackets-expertise"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-[100px] xl:px-[150px] ">
        <p className="mb-[40px] flex flex-col items-center gap-2 text-white font-satoshi font-bold text-xs leading-[18px] tracking-[3.2px]">
          Accessibility for All
          <Icon icon="green-arrow-down" iconHeight={24} iconWidth={24} />
        </p>
        <div className="anglebrackets_expertise_richtext  max-w-[849px] mx-auto w-full flex flex-col items-center gap-4">
          <RichText richText={_rawSubText} />
        </div>

        <div className="flex flex-col pt-4 lg:flex-row items-center gap-14 lg:gap-10 xl:gap-20 ">
          <div className="w-full lg:w-2/4">
            <Heading
              type="h3"
              otherClasses="text-center lg:text-left text-[20px] lg:text-[35px] leading-[27px] lg:leading-[47.25px] font-bold text-white font-satoshi"
            >
              {technologyHeading}
            </Heading>
            <div className="technology_richtext">
              <RichText richText={_rawTechnologyText} />
            </div>
            <div className="flex mt-8 lg:mt-20 lg:justify-start justify-center">
              <Button {...button} onClick={() => toggleFunc(button?.form)} />
            </div>
          </div>
          <div className=" flex justify-center lg:block w-full lg:w-2/4">
            <Image imageData={image} className="w-full" />
          </div>
        </div>
        {logos?.length > 0 && (
          <div
            className={clsx(
              'w-full grid grid-cols-3 sm:grid-cols-4  gap-8',
              logos?.length < 6 ? 'lg:grid-cols-3' : 'lg:grid-cols-6'
            )}
          >
            {logos.map(({ identifier, image }) => {
              return (
                <div className="flex flex-col gap-2 items-center opacity-50">
                  <Image
                    objectFit="fill"
                    imageData={image}
                    otherClasses="min-w-[50px] min-h-[50px] h-[50px] w-[50px]"
                  />
                  <p className="text-xs leading-[16.2px] text-center font-medium font-satoshi text-white">
                    {identifier}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default AngleBracketsExpertise

export const query = graphql`
  fragment ExprtiseSection on SanityExpertiseSections {
    __typename
    identifier
    technologyHeading
    button {
      ...Button
    }
    image {
      ...CustomImage
    }
    _rawSubText
    _rawTechnologyText
    logos {
      identifier
      image {
        ...CustomImage
      }
    }
  }
`
