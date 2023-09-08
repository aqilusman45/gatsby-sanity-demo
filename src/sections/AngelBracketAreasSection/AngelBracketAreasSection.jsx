import React, {  useRef } from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading';
import './anglebracketareas.scss'
import AngleBracketAreasCard from '../../components/AngleBracketAreasCard/AngleBracketAreasCard';
import icon from '../../images/temp/angle_bracket_area_card.png'
import Slider from '../../components/Slider/Slider';
import Icon from '../../components/Icon/Icon';


export const AngelBracketAreasSection = ({
  otherClasses
}) => {
  const angelBracketAreasSectionClasses = clsx(otherClasses, 'w-full bg-secondary_gray py-section_py_mob  lg:py-section_py_desk');
  const slider = useRef(null)
  

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
  const arr = [{
    icon: icon,
    title: 'Mobile Development',
    _rawText: 'Make your banking business truly modern and digitized to win more customers, boost profits, and stand out against competitors with AngleBrackets.',
    label: [
      'UI Design',
      'UX Design',
      'Product Design',
      'Design Systems'
    ]
  },
  {
    icon: icon,
    title: 'Web Development',
    _rawText: 'Make your banking business truly modern and digitized to win more customers, boost profits, and stand out against competitors with AngleBrackets.',
    label: [
      '170+ projects',
      '260+ specialists',
      '16 years in the industry'
    ]
  },
  {
    icon: icon,
    title: 'Staff Augmentation ',
    _rawText: 'Make your banking business truly modern and digitized to win more customers, boost profits, and stand out against competitors with AngleBrackets.',
    label: [
      'UI Design',
      'UX Design',
      'Product Design',
      'Design Systems'
    ]
  },
  {
    icon: icon,
    title: 'Mobile Development',
    _rawText: 'Make your banking business truly modern and digitized to win more customers, boost profits, and stand out against competitors with AngleBrackets.',
    label: [
      '170+ projects',
      '260+ specialists',
      '16 years in the industry'
    ]
  }
  ]



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "40px",
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
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
    ]
  };

  return (
    <section className={angelBracketAreasSectionClasses} data-testid='angel-bracket-areas-section'>
      <div className='w-full mx-auto max-w-[1440px] '>
        <div className='px-6 '>
          <Heading type='h2' className='text-[25px] text-center leading-[33.75px] font-satoshi lg:leading-[67.5px] lg:text-[50px] why_angle_bracket_text_gradient mb-4'><span className='text_grediant'>AngleBrackets</span> areas of tech expertise</Heading>
          <p className='font-satoshi w-full text-center max-w-[916px] mx-auto font-normal text-base leading-[22px] text-light_white opacity-50 mb-14 lg:mb-20'>Transform your ideas into reality with our cutting-edge web and mobile solutions. Partner with us and experience seamless digital transformation like never before.</p>
        </div>
        <div className=' w-full px-6 md:px-8 lg:px-4'>
          <Slider refs={slider} customClass="angle_brackets_project_slider" customSettings={settings}>
            {
              arr.map((nodes) => {
                return (
                  <div className=' px-2 lg:px-2 text-left'>
                    <AngleBracketAreasCard {...nodes} />
                  </div>
                )
              })
            }
          </Slider>
        </div>
       
      </div>
    </section>
  );
};

export default AngelBracketAreasSection;
