import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import Slider from '../../components/Slider/Slider'
import Button from '../../components/Button/Button'

import QualityAssuranceCard from '../../components/QualityAssuranceCard/QualityAssuranceCard'
import RichText from '../../components/RichText/RichText'
import leftarrow from '../../images/angleBrackets-icons/arrow-left.svg'
import rightarrow from '../../images/angleBrackets-icons/arrow-right.svg'

import './qualtiyassurancesection.scss'

export const QualityAssuranceSection = ({
  otherClasses,
  button,
  _rawFooterText,
  _rawSubText,
  cards,
}) => {
  const qualityAssuranceSectionClasses = clsx(
    otherClasses,
    ' bg-secondary_gray_300 mx-auto py-section_py_mob  lg:py-section_py_desk'
  )

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      >
      </button>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      >
      </button>
    )
  }

  const settings = {
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          centerPadding: '20px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: '4px',
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <section
      className={qualityAssuranceSectionClasses}
      data-testid="quality-assurance-section"
    >
      <div className=" mx-auto max-w-[1440px]">
        <div className="max-w-[807px] mx-auto px-[24px] md:lg-[0px] text-center">
          <RichText
            richText={_rawSubText}
            otherClasses="qualityassurance_section_richText_subtext"
          />
        </div>
        <div className="w-full gap-7 mt-[80px] max-w-[1140px] mx-auto hidden md:flex justify-center flex-wrap">
          {cards.map((nodes) => {
            return <QualityAssuranceCard {...nodes} />
          })}
        </div>
        <div className="md:hidden">
          <Slider customSettings={settings} customClass="mt-[56px] px-6 md:px-8 lg:px-4">
            {cards.map((nodes) => {
              return (
                <div className="px-2 ">
                  <QualityAssuranceCard {...nodes} />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="w-full gap-4 px-[24px] lg:flex">
          <div className="w-full max-w-[1140px] mt-[100px] md:mt-[72px] mx-auto border-[1px] border-[#00ED64] opacity-20 border-dashed  relative after:absolute after:left-2/4 after:translate-x-[-50%] after:rounded-full after:top-2/4 after:translate-y-[-50%] after:w-4 after:h-4"></div>{' '}
        </div>
        <div className="flex items-center max-w-[1140px]  px-[24px]  md:lg-[0px] mx-auto justify-between mt-[48px]  flex-col gap-[24px] sm:flex-row">
          <RichText
            richText={_rawFooterText}
            otherClasses=" qualityassurance_footertext  max-w-[425px]"
          />
          <Button
            {...button}
            otherClasses=" max-w-fit qualityassurance_footerbutton"
          />
        </div>
      </div>
    </section>
  )
}

export default QualityAssuranceSection

export const query = graphql`
  fragment QualityAssurance on SanityQualityAssuranceSection {
    identifier
    button {
      ...Button
    }
    __typename
    _rawSubText
    _rawFooterText
    cards {
      logo {
        ...CustomImage
      }
      heading
      qualities {
        list
      }
    }
  }
`
