import React from 'react'
import clsx from 'clsx'
import RichText from '../RichText'
import Image from '../Image/Image'
import Heading from '../Heading/Heading'
import './portfoliocard.scss'
import { Link } from 'gatsby'
import { Slider } from '../Slider'

export const PortfolioCard = ({
  otherClasses,
  index,
  title,
  _rawDescription,
  desktopImage,
  buttonTitle,
  slug: { current },
  technologies,
}) => {
  const portfolioCardClasses = clsx(
    otherClasses,
    'my-5 mx-auto md:w-full lg:max-w-[365px] md:max-w-[1140px] mb-[20px] md:mx-auto lg:min-h-[500px]'
  )
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    centerPadding: '20px',
    autoplay: true,
    slidesToScroll: 1,
  }
  return (
    <div className={portfolioCardClasses} data-testid="portfolio-card">
      <div className="md:w-full  !bg-[#21313C] rounded-[20px] lg:max-w-[364px]  mx-auto lg:items-start items-center ">
        <Link to={`/portfolio/${current}`}>
          <Image
            imageData={desktopImage}
            otherClasses=" w-full  rounded-[20px]"
          />
        </Link>
        <div className="h-[285px] lg:h-[265px] flex flex-col justify-between py-[20px] px-[20px]">
          <Link to={`/portfolio/${current}`}>
            <div>
              <Heading
                type="h3"
                otherClasses="portfolio_card_title !text-[22px] "
              >
                {title}
              </Heading>
              <RichText
                richText={_rawDescription}
                otherClasses=" portfolio_card_richtext"
              />
            </div>
          </Link>
          <Slider
            customSettings={settings}
            customClass="cursor-pointer mb-[2px] protfolio_card"
          >
            {technologies?.map(({ category }, index) => {
              return (
                <div className="px-1">
                  <p
                    key={index}
                    className="text-white text-center font-satoshi whitespace-nowrap text-[12px] font-medium py-[6px] rounded-2xl bg-secondary_gray_300 "
                  >
                    {category}
                  </p>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
    // </Link>
  )
}

export default PortfolioCard
