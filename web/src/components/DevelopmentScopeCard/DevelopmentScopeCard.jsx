import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'
import CheckBox from '../CheckBox/CheckBox'
import RichText from '../RichText/RichText'
import './developmentscopecard.scss'

export const DevelopmentScopeCard = ({
  otherClasses,
  heading,
  logo,
  _rawAbout,
  _rawText,
  services: { list },
}) => {
  const developmentScopeCardClasses = clsx(
    otherClasses,
    'rounded-[20px] bg-secondary_gray_300 lg:max-w-[1140px] lg:w-full px-[32px] mx-[24px] py-[32px] lg:py-[0] lg:grid grid-cols-2  lg:mb-[100px] lg:px-[100px] lg:mx-[0]'
  )

  return (
    <div
      className={developmentScopeCardClasses}
      data-testid="development-scope-card"
    >
      <div className="pb-[56px] lg:pb-[0]  lg:my-[100px] lg:mr-[80px]">
        <Image imageData={logo} />
        <Heading
          type="h6"
          otherClasses="text-[25px] lg:text-[35px] mt-[24px] text-light_white"
        >
          {heading}
        </Heading>
        <RichText
          richText={_rawAbout}
          otherClasses="development_scope_about_richText"
        />
      </div>
      <div className=" lg:my-[118.5px] ">
        <RichText
          richText={_rawText}
          otherClasses="development_scope_text_richText"
        />

        <div className="flex flex-col gap-y-4  mt-[56px] lg:mt-[80px] lg:text-[14px]">
          {list.map((node) => {
            return (
              <p className="flex gap-[11px] text-light_white">
                <CheckBox isChecked={true} />
                {node}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DevelopmentScopeCard
