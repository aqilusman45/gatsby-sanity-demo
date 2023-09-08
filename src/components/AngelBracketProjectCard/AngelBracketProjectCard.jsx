import React from 'react'
import clsx from 'clsx'
import './anglebracketprojectcard.scss'

import Heading from '../Heading/Heading'
import Image from '../Image/Image'

export const AngelBracketProjectCard = ({
  otherClasses,
  desktopImage,
  title,
  technologies,
}) => {
  const angelBracketProjectCardClasses = clsx(
    otherClasses,
    'w-full lg:h-[310px] rounded-[20px] h-[330px] lg:h-[270px] xl:h-[350px] relative overflow-hidden'
  )
  return (
    <div
      className={angelBracketProjectCardClasses}
      data-testid="angel-bracket-project-card"
    >
      <Image
        objectFit="fill"
        imageData={desktopImage}
        otherClasses="!absolute top-0 left-0 h-full w-full "
      />
      <div className=" w-full h-[330px] lg:h-[280px] xl:h-[350px] p-8 lg:8 xl:p-12 transition-all duration-500 cursor-pointer rounded-[20px] bg-black text-white opacity-0 hover:opacity-95 flex flex-col justify-between">
        <div>
          <Heading
            type="h3"
            otherClasses="mb-4 text-lg leading-6 lg:leading-[40.5px] xl:text-[30px]"
          >
            {title}
          </Heading>
        </div>
        <div className="flex gap-4 items-center justify-start flex-wrap">
          {technologies?.map(({ category }, index) => {
            return (
              <p
                key={index}
                className="bg-green-400 font-satoshi font-medium px-4 py-2 rounded-full text-secondary_gray_300 "
              >
                {category}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AngelBracketProjectCard
