import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import Slider from '../../components/Slider/Slider'
import Icon from '../../components/Icon/Icon'

export const ReviewsSection = ({ otherClasses }) => {
  const reviewsSectionClasses = clsx(
    otherClasses,
    '  lg:px-[100px] xl:px-[150px] py-section_py_mob  lg:py-section_py_desk bg-secondary_gray_300'
  )

  const {
    allSanityReviews: { nodes },
  } = useStaticQuery(graphql`
    query Testimonials {
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
  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      >
      </button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      >
      </button>
    )
  } 

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows:true,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <TestimonailPrevArrow />,
    nextArrow: <TestimonailNextArrow />,
  }

  return (
    <section className={reviewsSectionClasses} data-testid="reviews-section">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 lg:px-0 mx-auto max-w-[1140px] hidden md:grid grid-cols-2  md:gap-x-[20px] md:gap-y-[20px]">
          {nodes.map((data, index) => {
            return <TestimonialCard {...data} key={index} />
          })}
        </div>
        <Slider customClass='relative px-6 md:px-8 lg:px-4 !block md:!hidden' customSettings={settings}>
          {nodes.map((node,index) => {
            return (
              <div className='px-2'>

                <TestimonialCard key={index} {...node} />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default ReviewsSection

export const query = graphql`
  fragment ReviewsSection on SanityReviewsSectionReference {
    __typename
    identifier
  }
`
