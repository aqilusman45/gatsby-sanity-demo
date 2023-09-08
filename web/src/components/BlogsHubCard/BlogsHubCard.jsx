import React from 'react'
import clsx from 'clsx'
import Image from '../Image/Image'
import { Link } from 'gatsby'
import './blogshubcard.scss'

import Heading from '../Heading/Heading'
import { Icon } from '../../components/Icon'

export const BlogsHubCard = ({
  otherClasses,
  slug: { current },
  desktopImage,
  title,
  description,
  publishedAt,
  authors: { name },
  blogCategory: { category },
}) => {
  const blogsHubCardClasses = clsx(otherClasses, 'py-2 ')

const date = publishedAt.slice(0,10)


  return (
    <div className={blogsHubCardClasses} data-testid="blogs-hub-card">
      <div className="flex lg:gap-4 items-center flex-col bg-secondary_gray lg:flex-row rounded-[10px] p-[20px]">
        <div className="max-w-[400px]">
          <Image imageData={desktopImage} otherClasses="md:h-[290px] md:w-[350px] rounded-[10px]" objectFit="fill" />
        </div>
        <div>
          <div>
            <p className="my-2 font-satoshi text-primary_green">{category}</p>
            <Heading type="h6" otherClasses="text-[20px] font-medium  md:text-[26px] leading-0 my-5 font-satoshi text-white">
              {title}
            </Heading>
            <div className="flex flex-row gap-[7px] lg:gap-3 my-5">
              <Icon icon="calendar-icon" iconHeight={20} iconWidth={18} />
              <p className="text-[#F7F8F8] leading-[22px] opacity-50 text-[16px] font-normal font-satoshi">
                {date}
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Icon icon="Line" iconHeight={20} iconWidth={35} />
                  <p className="ml-1 font-satoshi text-white opacity-90">by</p>
                </div>

                <p className="ml-1 font-satoshi text-white opacity-90">
                  {name}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-6 mb-6 font-satoshi text-white opacity-50">
              {description}
            </p>
          </div>
          <div className="my-4">
            <Link
              to={`/blogs/${current}`}
              className="font-satoshi text-primary_green flex underline cursor-pointer font-bold text-base leading-[22px] "
            >
              {' '}
              Read More{' '}
              <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsHubCard
