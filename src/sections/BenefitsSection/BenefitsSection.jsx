import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import leftarrow from '../../images/angleBrackets-icons/arrow-left.svg'
import rightarrow from '../../images/angleBrackets-icons/arrow-right.svg'
import Slider from '../../components/Slider/Slider'
import BenefitsSectionCard from '../../components/BenefitsSectionCard'

import './benefitssection.scss'
import RichText from '../../components/RichText/RichText'

export const BenefitsSection = ({ otherClasses, _rawSubText, cards }) => {
  const benefitsSectionClasses = clsx(
    otherClasses,
    ' bg-secondary_gray_300 py-section_py_mob  lg:py-section_py_desk mx-auto'
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
        breakpoint: 770,
        settings: {
          centerPadding: '120px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          centerPadding: '55px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
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
    <section className={benefitsSectionClasses} data-testid="benefits-section">
      <div className=" mx-auto max-w-[1440px] pt-[72px] pb-[87px] xl:py-[96px]">
        <div className="">
          <div className="max-w-[807px] mx-auto px-[24px] text-center">
            <RichText
              richText={_rawSubText}
              otherClasses="benefits_section_rich_text"
            />
          </div>
          <div className="w-full   gap-7 mt-[80px] max-w-[1140px] mx-auto hidden md:flex justify-center flex-wrap">
            {cards.map((nodes) => {
              return <BenefitsSectionCard {...nodes} />
            })}
          </div>
          <div className="md:hidden">
            <Slider customSettings={settings} customClass="mt-[56px]  px-6 md:px-8 lg:px-4">
              {cards.map((nodes) => {
                return (
                  <div className="px-2">
                    <BenefitsSectionCard {...nodes} />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>{' '}
      </div>
    </section>
  )
}

export default BenefitsSection

export const query = graphql`
  fragment BenefitsSection on SanityBenefitsSections {
    __typename
    identifier
    _rawSubText
    cards {
      heading
      _rawSubText
    }
  }
`
