import React from 'react'
import clsx from 'clsx'

import { graphql, useStaticQuery } from 'gatsby'
import { Heading } from '../../components/Heading'

import Slider from '../../components/Slider/Slider'
import ServicesCard from '../../components/ServicesCard/ServicesCard'

export const TechnologiesSection = ({
  otherClasses,heading
}) => {
  const technologiesSectionClasses = clsx(otherClasses,"bg-secondary_gray_300 pt-section_py_mob pb-[45px] lg:py-section_py_desk");
  
  const {
    allSanityTechnologiesPages: { nodes },
  } = useStaticQuery(graphql`
  query TechnologiesPages {
    allSanityTechnologiesPages {
      nodes {
        title
        slug {
          current
        }
        image {
          ...CustomImage
        }
        description
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
    slidesToShow: 2,
    arrows:true,
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
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
  }


  return (
    <section className={technologiesSectionClasses} data-testid='technologies-section'>
       <div className="max-w-[1140px] mx-auto text-center  px-2 lg:px-0 ">
        <Heading type="h2" otherClasses="PortfolioSection_heading">
          {heading}
        </Heading>
      </div>


      <div className=" mt-[26px] px-[30px]  grid-cols-1 lg:grid-cols-3 max-w-[1140px] mx-auto hidden md:grid gap-x-[24px]">
        {nodes.map((nodes, index) => {
            return <ServicesCard key={nodes.title} {...nodes} index={index} />
          })}
      </div>

      <div className="md:hidden">
        <Slider customSettings={settings} customClass="px-6 md:px-8 lg:px-4 mt-[26px]">
          {nodes.map((nodes, index) => {
              return (
                <div className='px-2'>
                <ServicesCard
                  key={nodes.title}
                  {...nodes}
                  index={index}
                  otherClasses="mx-5 sm:mx-8"
                />
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  );
};

export default TechnologiesSection;
export const query  = graphql`
fragment TechnologiesSections on SanityTechnologiesSectionReference {
  __typename
  identifier
  heading
}`

