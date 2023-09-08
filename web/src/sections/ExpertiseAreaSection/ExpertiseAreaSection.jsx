import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import Slider from '../../components/Slider/Slider'
import ExpertiseAreaCard from '../../components/ExpertiseAreaCard/ExpertiseAreaCard'
import Icon from '../../components/Icon/Icon'
import './expertiseareasection.scss'

export const ExpertiseAreaSection = ({
  otherClasses,
  heading,
  _rawSubText,
  cards,
}) => {
  const expertiseAreaSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray py-section_py_mob lg:py-section_py_desk lg:px-[0px] '
  )

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      ></button>
    )
  }

  const TestimonailNextArrow = (props) => {
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
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section
      className={expertiseAreaSectionClasses}
      data-testid="expertise-area-section"
    >
      <div className="max-w-[1440px] lg:px-[100px] mx-auto">
        <div className="max-w-[916px] mx-auto px-[20px] text-center">
          <RichText
            richText={_rawSubText}
            otherClasses="expertiseAreaSection_text"
          />
        </div>
        <div className="max-w-[1140px] mx-auto lg:mt-[80px]">
          <Slider
            customClass="angle_brackets_project_slider px-6 md:px-8 lg:px-4"
            customSettings={settings}
          >
            {cards.map((nodes) => {
              return (
                <div className="px-2 lg:px-2 text-left">
                  <ExpertiseAreaCard {...nodes} />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseAreaSection
export const query = graphql`
  fragment ExpertiseAreaSection on SanityExpertiseAreaSection {
    identifier
    __typename
    heading
    _rawSubText
    cards {
      heading
      _rawSubText
      expertises {
        list
      }
      expertiseLogo {
        ...CustomImage
      }
    }
  }
`
