import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import Icon from '../../components/Icon'
import Heading from '../../components/Heading'
import WhyAngleBracketsCard from '../../components/WhyAngleBracketsCard'
import Slider from '../../components/Slider'
import { RichText } from '../../components/RichText'

import './whyanglebracketssection.scss'
import Button from '../../components/Button/Button'

export const WhyAngleBracketsSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
  title,
  button,
}) => {
  const whyAngleBracketsSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300'
  )

  const SliderPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      ></button>
    )
  }
  const SliderNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      ></button>
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <SliderPrevArrow />,
    nextArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const lenght = cards.length

  return (
    <section
      className={whyAngleBracketsSectionClasses}
      data-testid="why-angle-brackets-section"
    >
      <div
        className={clsx(
          lenght <= 3
            ? 'lg:pt-section_py_desk pt-section_py_mob pb-[130px] lg:pb-[70px]'
            : 'pt-section_py_mob lg:pt-section_py_desk lg:pb-section_py_desk'
        )}
      >
        <div className="max-w-[1512px] lg:px-[100px] xl:px-[150px] mx-auto w-full">
          <div className="px-6">
            <p className="mb-[30px] lg:mb-[60px] flex flex-col items-center gap-2 text-white font-satoshi font-bold text-xs leading-[18px] tracking-[3.2px]">
              Accessibility for All
              <Icon icon="green-arrow-down" iconHeight={24} iconWidth={24} />
            </p>
            <div
              className={clsx(
                'mb-14 lg:mb-20 mx-auto w-full flex flex-col items-center gap-4 ',
                title ? 'lg:max-w-[807px]' : 'lg:max-w-[559px]'
              )}
            >
              {mainHeading && (
                <Heading otherClasses="text-[25px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
                  {mainHeading}
                </Heading>
              )}
              <div className="whyussection_richtext">
                <RichText richText={_rawSubText} />
              </div>
            </div>
          </div>
          {/* <div className=""> */}
          <Slider
            customSettings={settings}
            customClass=" why_angle_brackets_slider_section px-6  md:px-8 lg:px-0"
          >
            {cards.map((nodes, index) => {
              return (
                <div className="px-2" key={index}>
                  <WhyAngleBracketsCard {...nodes} type="primary" />
                </div>
              )
            })}
          </Slider>
          {/* </div> */}

          {title && (
            <>
              <div className="lg:mt-[100px] w-full border-[1px] border-dashed border-[#00ED64] opacity-20"></div>
              <div className="flex flex-row justify-between lg:mt-[48px] ">
                <p className="max-w-[425px] font-bold font-satoshi text-[20px] leading-[30px] text-white capitalize ">
                  {title}
                </p>
                <Button {...button} otherClasses="h-fit" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default WhyAngleBracketsSection

export const query = graphql`
  fragment WhyUsSection on SanityWhyUsSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    title
    button {
      ...Button
    }
    cards {
      heading
      image {
        ...CustomImage
      }
      subText
    }
  }
`
