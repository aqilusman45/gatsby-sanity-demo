import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import { RichText } from '../RichText'
import { Image } from '../Image'
import CheckBox from '../CheckBox/CheckBox'

export const ExpertiseAreaCard = ({
  otherClasses,
  heading,
  _rawSubText,
  expertises: { list },
  expertiseLogo,
}) => {
  const expertiseAreaCardClasses = clsx(otherClasses ," bg-secondary_gray_300 lg:mt-[0px] mt-[56px] rounded-[20px] px-[18px] py-[32px]")

  return (
    <div className={expertiseAreaCardClasses} data-testid="expertise-area-card">
      <Image imageData={expertiseLogo} />
      <Heading type="h4" otherClasses="mt-[24px] mb-[16px] text-[18px] text-[#FFFFFF] font-satoshi font-bold leading-[24px]">{heading}</Heading>
      <RichText richText={_rawSubText}  otherClasses='text-[16px] font-normal leading-[24px] font-satoshi text-[#F7F8F8] opacity-50'/>
      <div className='flex flex-col gap-[12px] lg:gap-[16px] mt-[40px]'>
        {list.map((nodes) => {
          return (
            // <div className="">
              <p className="flex text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[18.9px] font-medium">
                <CheckBox isChecked={true} otherClasses="pr-[7px]"/>
                {nodes}
              </p>
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExpertiseAreaCard
