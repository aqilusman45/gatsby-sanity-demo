import React from 'react'
import clsx from 'clsx'

import Heading from '../../components/Heading/Heading'
import { RichText } from '../RichText'
import { Image } from '../Image'
import CheckBox from '../CheckBox/CheckBox'

export const QualityAssuranceCard = ({
  otherClasses,
  heading,
  _rawSubText,
  logo,
  qualities: { list },
}) => {
  const qualityAssuranceCardClasses = clsx(otherClasses)

  return (
    <div
      className={qualityAssuranceCardClasses}
      data-testid="quality-assurance-card"
    >
      <div className=" h-full md:max-w-[358.5px] w-full px-[30px] py-[30px] bg-secondary_gray benefits-card">
        <Image imageData={logo} />
        <Heading
          type="h6"
          className="leading-[24.3px] mt-[24px] mb-[24px] text-light_white"
        >
          {heading}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="qualityassurance_card_rich_text"
        />
        <div className="">
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

export default QualityAssuranceCard
