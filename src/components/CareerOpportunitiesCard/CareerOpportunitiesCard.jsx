import React, { useState } from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import { RichText } from '../RichText'
import './careeropportunitiescard.scss'
import Icon from '../Icon/Icon'


export const CareerOpportunitiesCard = ({
  otherClasses,
  heading,
  _rawSubText,
  button,toggleModal,
  toggleFunc
}) => {
  const careerOpportunitiesCardClasses = clsx(otherClasses)

  
  return (
    <div
      className={careerOpportunitiesCardClasses}
      data-testid="career-opportunities-card"
    >
    
        <div className=" bg-secondary_gray_300 py-[30px] px-[30px] rounded-[20px]">
          <Heading type="h2" otherClasses="CareerOpportunitiesCard_heading pb-[16px]">{heading}</Heading>
          <RichText richText={_rawSubText} otherClasses="CareerOpportunitiesCard_Richtext"/>
          <div className='flex flex-row-reverse pt-[10px]'>
          <button className='flex items-center text-primary_green_light button_container font-satoshi underline px-[22px] py-3 rounded-full cursor-pointer font-bold text-base leading-[22px] ' onClick={() => toggleModal(heading)} > <p className='leading-[21.6px] underline'>Apply Now </p>
          <Icon otherClasses="meettheteam-card-icon"></Icon></button>
          </div>
        </div>
    </div>
  )
}

export default CareerOpportunitiesCard