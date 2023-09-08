import React from 'react'
import clsx from 'clsx'
import './anglebracketsdeveloperscard.scss'
import Heading from '../Heading/Heading'
import Image from '../Image/Image'
import { Link } from 'gatsby'

export const AngleBracketsDevelopersCard = ({
  otherClasses,
  image,
  index,
  name,
  position: { title = '' } = {},
  description,
  technologies,
  slug: { current = '' } = {},
}) => {
  const angleBracketsDevelopersCardClasses = clsx(
    otherClasses,
    'backdrop-blur-[10px] rounded-[20px] p-[30px] angle_brackets_developer_card_bg'
  )
  return (
    <Link
      to={`/meet-the-team/${current}`}
      key={index}
      data-testid="angle-brackets-developers-card"
    >
      <div className={angleBracketsDevelopersCardClasses}>
        <div className=" rounded-full h-[78px] w-[78px] ">
          {image && (
            <Image
              imageData={image}
              otherClasses="rounded-full w-[50px] h-[50px]"
            />
          )}
        </div>
        <Heading
          type="h6"
          otherClasses="text-[18px] leading-[24.3px] text-white mb-2 font-bold font-satoshi"
        >
          {name}
        </Heading>
        <p className="text-base leading-[21.6px] text-white font-satoshi mb-4 font-normal ">
          {title}
        </p>
        <p className="text-base leading-[21.6px] text-white font-satoshi font-normal opacity-50 mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          {technologies?.length > 0 &&
            technologies
              ?.map(({ image }, index) => {
                return (
                  <div key={index} className="">
                    {image && (
                      <Image
                        imageData={image}
                        //  objectFit="fill"
                        otherClasses="w-[70px] h-[70px] "
                      />
                    )}
                  </div>
                )
              })
              .slice(0, 3)}
        </div>
      </div>
    </Link>
  )
}

export default AngleBracketsDevelopersCard
