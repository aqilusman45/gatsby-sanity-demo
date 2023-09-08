import React from 'react'
import clsx from 'clsx'
import Heading from '../Heading/Heading'
import RichText from '../RichText/RichText'
import './testimonialscard.scss'
import Image from '../Image/Image'

export const TestimonialCard = ({
  otherClasses,
  heading,
  _rawSubText,
  image,
  name,
  technologies,
  designation,
  index,
}) => {
  const testimonialCardClasses = clsx(
    otherClasses,
    'bg-secondary_gray w-full p-4 lg:p-10 rounded-[20px] flex flex-row lg:flex-row gap-[56px] lg:gap-10 xl:gap-20'
  )

  return (
    <div
      className={testimonialCardClasses}
      key={index}
      data-testid="testimonial-card"
    >
      <div className={clsx('w-full flex flex-col justify-between')}>
        <div className="mb-2 lg:mb-6">
          <Heading
            otherClasses="text-[25px] lg:text-[30px] leading-[33.75px] lg:leading-[40.5px] text-white mb-4 font-bold font-satoshi"
            type="h3"
          >
            {heading}
          </Heading>
          <div className="testimonialcard_rich_text">
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <div>
        <div className="flex items-center gap-4">
          <Image
            imageData={image}
            otherClasses="min-w-[60px] min-h-[60px] w-[60px] h-[60px] rounded-full "
          />
          <div>
            <h6 className="text-base font-bold font-satoshi text-white leading-[21.6px] mb-2">
              {name}
            </h6>
            <p className="text-sm leading-[18.9px] font-satoshi text-light_white font-normal opacity-50">
              {designation}
            </p>
          </div>
        </div>
        {technologies?.length > 0 && (
        <div className='mt-10' >
          <ul className="flex flex-col gap-[8px] ">
            <li className="text-base font-bold font-satoshi text-white leading-[21.6px] mb-2">
              Technologies
            </li>
            <li className="flex gap-[8px] flex-wrap">
              {technologies.map(({ category }) => {
                return (
                  <p className="text-base leading-[21.6px] px-4 py-2 rounded-full bg-secondary_gray_300 font-satoshi text-white font-normal opacity-50">
                    {category}
                  </p>
                )
              })}
            </li>
          </ul>
        </div>)}
      </div>
      </div>
    </div>
  )
}

export default TestimonialCard
