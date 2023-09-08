import React from 'react'
import clsx from 'clsx'
import { Link } from 'gatsby'
import Image from '../Image/Image'
import Button from '../Button/Button'

import Heading from '../Heading/Heading'
import { Icon } from '../../components/Icon'

export const BlogCard = ({
  otherClasses,
  slug: { current },
  desktopImage,
  title,
  description,
  publishedAt,
  authors: { name },
  blogCategory: { category },
}) => {
  const blogCardClasses = clsx(otherClasses, 'bg-secondary_gray rounded-3xl')


const limitedtitle = title.slice(0,39).concat('...')

  return (
    <div className={blogCardClasses} data-testid="blog-card">
      <Image
        imageData={desktopImage}
        objectFit="cover"
        otherClasses="mb-3 w-full rounded-3xl"
      />
      <div className='px-4'>
        <p className="my-3 font-satoshi text-primary_green">{category}</p>
        <Heading type="h4" otherClasses="my-5 font-satoshi text-white">
          {limitedtitle}
        </Heading>
        <div className="flex flex-row gap-[7px] lg:gap-3 my-5">
          <Icon icon="calendar-icon" iconHeight={20} iconWidth={18} />
          <p className="text-[#F7F8F8] leading-[22px] opacity-50 text-[16px] font-normal font-satoshi">
            {publishedAt}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <Icon icon="Line" iconHeight={20} iconWidth={35} />
              <p className="ml-1 font-satoshi text-white opacity-90">by</p>
            </div>

            <p className="ml-1 font-satoshi text-white opacity-90">{name}</p>
          </div>
        </div>
      </div>
      <div className='px-4'>
        <p className="mt-7 mb-7 font-satoshi text-white opacity-50">{description}</p>
      </div>
      <div className="pb-3 px-4">
          <Link to={`/blogs/${current}`} className='font-satoshi text-primary_green flex underline cursor-pointer font-bold text-base leading-[22px] '> Read More  <Icon icon="textlink_arrow" iconHeight={24} iconWidth={20} /></Link>
      </div>
    </div>
  )
}

export default BlogCard
