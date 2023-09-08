import React from 'react'
import clsx from 'clsx'
import './servicesintrocard.scss'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'
import RichText from '../RichText/RichText'
import CheckBox from '../CheckBox/CheckBox'

export const ServicesIntroCard = ({
  otherClasses,
  logo,
  heading,
  _rawSubText,
  _rawText,
  checklist,
  imagesCards,
  isdarkTheme
}) => {
  const servicesIntroCardClasses = clsx(
    otherClasses,
  'w-full  py-[32px] px-[32px] lg:px-[55px] lg:py-[55px] xl:px-[100px] xl:py-[100px] 2xl:px-[100px] 2xl:py-[100px] rounded-[20px]',isdarkTheme?'background-gradient':'bg-secondary_gray_300'
  )

  return (
    <div className={servicesIntroCardClasses} data-testid="services-intro-card">
      <div className={clsx("flex ", imagesCards?.length>0&& "flex-col gap-[100px]")}>
        <div className=" flex flex-col md:flex-row gap-[80px]">
          <div className="w-full md:w-2/4">
       {logo&&     <Image
              objectFit="fill"
              imageData={logo}
              otherClasses="max-w-[50px] max-h-[50px] pb-[26px]"
            />}
            <Heading
              type="h4"
              otherClasses="mb-[16px] text-white font-bold text-[35px] leading-[47px] font-satoshi"
            >
              {heading}
            </Heading>
            <RichText
              richText={_rawSubText}
              otherClasses="services_subtext_intro_rich_text"
            />
          </div>
          <div className="w-full md:w-2/4">
            <RichText
              richText={_rawText}
              otherClasses="services_text_intro_rich_text"
            />

           {checklist && <div className={clsx("grid gap-[21px] mt-[82.5px]",checklist?.list.length>3 ? 'grid-cols-2':'grid-cols-1')}>
              {checklist.list.map((node) => {
                return (
                  <div className="flex  gap-x-[11px] items-center">
                    <CheckBox isChecked={true} />
                    <p className="font-satoshi font-medium  text-sm leading-[19px] text-white">
                      {node}
                    </p>
                  </div>
                )
              })}
            </div>}
          </div>
        </div>
       {imagesCards?.length>0 &&<div className=' grid grid-cols-3 lg:grid-cols-6 gap-[35px] '>
            {imagesCards.map(({ identifier, image }) => {
              return (
                <div className='flex gap-[9px] flex-col justify-center items-center '>
                 {image&& <Image  objectFit='fill' imageData={image} otherClasses=' max-w-[50px]   opacity-50' />}
                  <p className='font-satoshi opacity-50 font-medium text-xs leading-[16px] text-white'>{identifier}</p>
                </div>
              )
            })}
          </div>}
      </div>
    </div>
  )
}

export default ServicesIntroCard
