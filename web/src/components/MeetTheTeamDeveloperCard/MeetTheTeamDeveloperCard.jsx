import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import Image from '../Image/Image'
import { Link } from 'gatsby'
import './meettheteamdevelopercard.scss'
import Icon from '../Icon/Icon'

export const MeetTheTeamDeveloperCard = ({
  otherClasses,
  image,
  index,
  name,
  position: { title = '' } = {},
  description,
  technologies,
  slug: { current = '' } = {},
}) => {
  const meetTheTeamDeveloperCardClasses = clsx(
    otherClasses,
    'backdrop-blur-[10px] rounded-[20px] p-[30px] meettheteam_developer_card_bg'
  )

  return (
    <div
      className={meetTheTeamDeveloperCardClasses}
      data-testid="meet-the-team-developer-card"
    >
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
      <div className="flex justify-end mt-5">
        <Link
          to={`/meet-the-team/${current}`}
          className="flex items-center text-primary_green_light link_container"
          key={index}
        >
          <p className="leading-[21.6px] underline">View Profile </p>
          <Icon otherClasses="meettheteam-card-icon"></Icon>
        </Link>
      </div>
    </div>
  )
}

export default MeetTheTeamDeveloperCard
