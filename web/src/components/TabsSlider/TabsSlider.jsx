import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Slider from '../Slider/Slider'
import './tabslider.scss'
import { useMediaPredicate } from 'react-media-hook'

export const TabsSlider = ({
  otherClasses,
  children,
  customSettings,
  indexSet,
}) => {
  const tabsSliderClasses = clsx(otherClasses, ' !overflow-visible relative')

  const isDesk = useMediaPredicate("(min-width:1024px)")

  const TestimonailPrevArrow = (props) => {
    const { onClick, currentSlide } = props

    return (
      <button
        onClick={() => {
          {
            onClick && onClick()
          }
          {!isDesk && indexSet(currentSlide - 1)}
        }}
        className="next_arrow !absolute left-[30px] top-2/4 translate-y-[-50%] translate-x-[-30px] !z-10 "
      ></button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick, currentSlide } = props
    return (
      <button
        onClick={() => {
          {
            onClick && onClick()
          }
          {!isDesk && indexSet(currentSlide + 1)}
        }}
        className="prev_arrow !absolute top-2/4 right-[30px] translate-y-[-50%] items-center translate-x-[30px] !z-10  "
      ></button>
    )
  }

  const settings2 = {
    speed: 200,
    autoplay: false,
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    touchMove:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    ...customSettings,
  }

  return (
    <div className="Tabs_Slider_Container">
      <Slider
        customSettings={settings2}
        className={tabsSliderClasses}
        data-testid="tabs-slider"
      >
        {children}
      </Slider>
    </div>
  )
}

export default TabsSlider
