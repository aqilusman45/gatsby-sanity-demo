import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'

export const ServicesCard = ({
  otherClasses,
  slug: { current },
  image,
  title,
  description,
}) => {
  const servicesCardClasses = clsx(
    otherClasses,
    'my-5 mx-auto md:w-full lg:max-w-[365px] md:max-w-[1140px]  mb-[20px] md:mx-auto'
  )

  return (
    <Link
      to={`/${current}`}
      className={servicesCardClasses}
      data-testid="services-card"
    >
      <div className="w-full !bg-[#21313C] rounded-[20px] lg:max-w-[364px]  mx-auto lg:items-start items-center ">
        <div className="flex  flex-col px-6 py-6 gap-4  justify-center">
          <div className=" mx-auto lg:mx-0 ">
            <Image imageData={image} otherClasses="h-[78px] w-[78px]" />
          </div>
          <div className=" flex flex-col gap-[10px]  text-center lg:text-left">
            <Heading
              type="h3"
              otherClasses=" font-satoshi font-bold text-xl leading-[27px] text-white "
            >
              {title}
            </Heading>
            <p className="font-satoshi text-base font-normal leading-[23px] text-[#F7F8F8] opacity-50 ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServicesCard
