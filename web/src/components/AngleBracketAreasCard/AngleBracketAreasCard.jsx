import React from 'react'
import clsx from 'clsx'

import Heading from '../Heading/Heading'
import CheckBox from '../../components/CheckBox/CheckBox'


export const AngleBracketAreasCard = ({
  otherClasses, heading, _rawText, label, icon
}) => {

  const angleBracketAreasCardClasses = clsx(
    otherClasses, 'w-full p-8 rounded-[20px] bg-secondary_gray_300 relative'
  )

  return (
    <div className={angleBracketAreasCardClasses} data-testid='angle-bracket-areas-card'>
      <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
        <img src={icon} alt='' className="max-w-5 max-h-5" />
      </div>
      <Heading
        type="h6"
        otherClasses="font-bold font-satoshi leading-[24.3px] text-white text-lg mb-4"
      >
        {heading}
      </Heading>
      <p className="text-base font-normal font-satoshi text-light_white opacity-50 mb-11">
        {_rawText}
      </p>
      <div className='flex flex-wrap gap-5'>
        {
          label.map((nodes) => {
            return <CheckBox label={nodes} />
          })
        }

      </div>

    </div>
  )
}

export default AngleBracketAreasCard
