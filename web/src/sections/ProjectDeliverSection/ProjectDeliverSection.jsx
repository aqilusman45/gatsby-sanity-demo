import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import Slider from '../../components/Slider/Slider'
import { RichText } from '../../components/RichText'
import WhyAngleBracketsCard from '../../components/WhyAngleBracketsCard/WhyAngleBracketsCard'
import { graphql, useStaticQuery } from 'gatsby'

import './projectdeliver.scss'
import Icon from '../../components/Icon/Icon'

export const ProjectDeliverSection = ({ mainHeading, _rawSubText, otherClasses ,isdarkTheme}) => {
  const projectDeliverSectionClasses = clsx(
    otherClasses,
    'w-full bg-secondary_gray_300 py-section_py_mob  lg:py-section_py_desk ',isdarkTheme? 'secondary_gray_300':'bg-secondary_gray'
  )

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
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: '150px',
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '80px',
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  const {
    allSanityIndustriesPages: { nodes },
  } = useStaticQuery(graphql`
    query Industries {
      allSanityIndustriesPages {
        nodes {
          heading
          subText
          image {
            ...CustomImage
          }
          buttonTitle
        }
      }
    }
  `)
  
  return (
    <section
      className={projectDeliverSectionClasses}
      data-testid="project-deliver-section"
    >
      <div className="max-w-[1440px] px-6 w-full mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center w-full lg:max-w-4xl mb-[56px] lg:mb-20">
          {mainHeading && (
            <Heading
              type="h2"
              otherClasses="font-bold font-satoshi text-[25px] mb-4 leading-8 lg:leading-[68px] why_angle_bracket_text_gradient lg:text-[50px]"
            >
              {mainHeading}
            </Heading>
          )}
          <div className="projectdeliversection_rich_text">
            <RichText richText={_rawSubText} otherClasses="font-satoshi font-normal text-base leading-[22px] text-light_white opacity-50" />
          </div>
        </div>
        <div className=" w-full  h-auto">
          <Slider
            customClass="angle_brackets_project_slider px-6 md:px-8 lg:px-4"
            customSettings={settings}
          >
            {nodes.map((node,index) => {
              return (
                <div className=" px-2 text-left" key ={index}>
                  <WhyAngleBracketsCard {...node} type='secondary' />
                </div>
              )
            })}
          </Slider>
         
        </div>
      </div>
    </section>
  )
}

export default ProjectDeliverSection

export const query = graphql`
  fragment ProjectDeliverSection on SanityProjectDeliverSection {
    __typename
    identifier
    isdarkTheme
    mainHeading
    _rawSubText
  }
`
