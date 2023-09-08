import React from 'react'
import clsx from 'clsx'
import { Image } from '../../components/Image/Image'
import RichText from '../../components/RichText/RichText'
import './corevaluecards.scss'
export const CoreValuesCard = ({
  otherClasses,
  imagetext,
  cardImage,
  _rawSubText,
  index,
}) => {
  const coreValuesCardClasses = clsx(otherClasses,"relative  overflow-clip")

  return (
    <div className={coreValuesCardClasses} data-testid="core-values-card">
      <p className={`img_backtext absolute  xl:top-[350px] text-[100px] xl:text-[150px] top-[740px] ${index%2 !== 0 ? "xl:left-[-800px] left-[-620px]" : "right-[-620px] xl:right-[-800px]"}  text-[100px] `}>{imagetext}</p>

      <div className="relative flex lg:flex-row flex-col justify-between gap-[50px] items-center gap-y-[56px] pb-[56px] xl:pb-[150px]">
        <div
          className={`max-w-[564px] ${
            index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <RichText richText={_rawSubText} otherClasses="core_cards_richtext" />
        </div>
        <div
          className={`relative ${
            index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <Image imageData={cardImage} otherClasses="max-w-[564px] " />
        </div>
      </div>
    </div>
  )
}

export default CoreValuesCard
