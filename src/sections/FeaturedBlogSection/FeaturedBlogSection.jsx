import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'

import Slider from '../../components/Slider/Slider'
import leftarrow from '../../images/angleBrackets-icons/arrow-left.svg'
import rightarrow from '../../images/angleBrackets-icons/arrow-right.svg'
import BlogCard from '../../components/BlogCard/BlogCard'
import { Heading } from '../../components/Heading'

export const FeaturedBlogSection = ({
  otherClasses,nodes
}) => {
  const featuredBlogSectionClasses = clsx(otherClasses,'bg-secondary_gray_300 pb-[80px]');
  

  const {
    allSanityFeaturedBlogsSection
  } = useStaticQuery(graphql`
      {    
        allSanityFeaturedBlogsSection{
      nodes{
        identifier
        heading
      }
    }
  }
  `)

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      >
      </button>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      >
      </button>
    )
  }


  const settings = {
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: '4px',
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <section className={featuredBlogSectionClasses} data-testid='featured-blog-section'>
  <div className="max-w-[1140px] pt-[20px] mx-auto text-center  px-2 lg:px-0 py-10">
        <Heading type="h2" otherClasses="PortfolioSection_heading mb-3">
          {allSanityFeaturedBlogsSection.nodes[0].heading}
        </Heading>
      </div>

      <div className=" px-[30px]  grid-cols-1 lg:grid-cols-3 max-w-[1140px] mx-auto hidden md:grid gap-x-[24px]">
        {nodes?.length > 0 &&
          nodes.map((nodes, index) => {
            return <BlogCard key={nodes.title} {...nodes} index={index} />
          })}
      </div>

      <div className="md:hidden">
        <Slider customSettings={settings} customClass="mt-[56px]">
          {nodes?.length > 0 &&
            nodes.map((nodes, index) => {
              return (
                <div className='px-4'>
                <BlogCard
                  key={nodes.title}
                  {...nodes}
                  index={index}
                  otherClasses="mx-5 sm:mx-8"
                />
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedBlogSection;
