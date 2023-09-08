import React from 'react'
import clsx from 'clsx'
import { Heading } from '../../components/Heading'
import Image from '../../components/Image/Image'
import { RichText } from '../../components/RichText'
import './portfoliopagesection.scss'
import Button from '../../components/Button/Button'

export const PortfolioPageSection = ({
  otherClasses,
  title,
  technologies,
  desktopImage,
  portfolioCategory,
  _rawBody,
  button,
}) => {
  const portfolioPageSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk'
  )

  return (
    <section
      className={portfolioPageSectionClasses}
      data-testid="portfolio-page-section"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1024px] mx-auto px-[24px] xl:px-0 ">
          <div className="grid gap-16  lg:gap-0 grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="mb-7 flex gap-[10px] flex-wrap">
                {portfolioCategory.map(({ category }) => (
                  <p className="text-[10px] leading-[10px] w-fit bg-primary_green text-secondary_gray opacity-100 font-bold px-3 py-[5px] rounded-full">
                    {category}
                  </p>
                ))}
              </div>
              <Heading type="h1" otherClasses="portfoliosection_heading">
                {title}
              </Heading>
              <div className="mb-[20px]">
                <Heading type="h6" otherClasses="mt-[50px] text-white">
                  Technologies
                </Heading>
                {technologies.map(({ category }) => {
                  return (
                    <ul className="mt-[15px] pl-[20px]">
                      <li className=" portfolio_list list-disc">{category}</li>
                    </ul>
                  )
                })}
              </div>
              {button?.label && (
                <Button
                  {...button}
                  otherClasses="py-2 px-7 font-satoshi font-extrabold"
                  isExitIcon={button?.label ? true : false}
                />
              )}
            </div>
            <div>
              {desktopImage && (
                <Image imageData={desktopImage} otherClasses="rounded-[20px]" />
              )}
            </div>
          </div>
          <div className=" mt-10 lg:mt-0">
            <RichText
              richText={_rawBody}
              otherClasses="PortfolioPage_richtext"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPageSection
