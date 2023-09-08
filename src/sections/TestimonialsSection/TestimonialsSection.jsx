import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import Slider from '../../components/Slider/Slider'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import './testimonialssection.scss'
import RichText from '../../components/RichText'
import { graphql, useStaticQuery } from 'gatsby'

export const TestimonialsSection = ({
  otherClasses,
  heading,
  _rawSubText,
  isDark,
}) => {
  const TestimonialsSectionClasses = clsx(
    otherClasses,

    'w-full py-section_py_mob  lg:py-section_py_desk relative',
    isDark ? ' bg-secondary_gray_300 ' : 'bg-secondary_gray'
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
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-10 lg:right-[-1%]"
      ></button>
    )
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
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
    prevArrow: <TestimonailPrevArrow />,
    nextArrow: <TestimonailNextArrow />,
  }

  const {
    allSanityReviews: { nodes },
  } = useStaticQuery(graphql`
    query ReviewsSectionQuery {
      allSanityReviews {
        nodes {
          heading
          image {
            ...CustomImage
          }
          name
          designation
          _rawSubText
          technologies {
            category
          }
        }
      }
    }
  `)

  return (
    <section
      className={TestimonialsSectionClasses}
      data-testid="testimonail-section"
    >
      <div className="max-w-[1440px] mx-auto w-full  lg:px-[100px] xl:px-[150px] ">
        <div className="mb-14 lg:mb-20 max-w-[709px] px-4 lg:px-0 mx-auto w-full flex flex-col items-center gap-4">
          {heading && (
            <Heading otherClasses="text-[25px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
              {heading}
            </Heading>
          )}
          <div className="testimonialssection_rich_text">
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <Slider
          customClass="relative px-6 md:px-8 lg:px-4"
          customSettings={settings}
        >
          {nodes.map((node, index) => {
            return (
              <div className="px-2" key={index}>
                <TestimonialCard
                  {...node}
                  otherClasses="reviews_card_text h-[430px] md:h-[390px] lg:h-[450px]"
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default TestimonialsSection

export const query = graphql`
  fragment TestimonialsSection on SanityTestimonialsSections {
    __typename
    identifier
    heading
    _rawSubText
    isDark
  }
`
