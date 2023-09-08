import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from '../../components/Slider/Slider'
import leftarrow from '../../images/angleBrackets-icons/arrow-left.svg'
import rightarrow from '../../images/angleBrackets-icons/arrow-right.svg'
import Icon from '../../components/Icon/Icon'

import TabsSlider from '../../components/TabsSlider/TabsSlider'

import './portfoliosection.scss'

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
import { Heading } from '../../components/Heading'
import { RichText } from '../../components/RichText'

export const PortfolioSection = ({ otherClasses, title, _rawSubText }) => {
  const portfolioSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray_300 py-section_py_mob  lg:py-section_py_desk'
  )
  const {
    allSanityPortfolio: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolio {
        nodes {
          portfolioCategory {
            category
          }
          __typename
          title
          _rawDescription
          desktopImage {
            ...CustomImage
          }
          slug {
            current
          }
          technologies {
            category
          }
        }
      }
    }
  `)

  const allTabs = [
    ...new Set(
      nodes
        .map(({ portfolioCategory }) => {
          return portfolioCategory.map(({ category }) => category)
        })
        .reduce(function (a, b) {
          return a.concat(b)
        }, [])
    ),
  ]

  const [tabs, settabs] = useState('all')
  const [activeTabs, setActiveTabs] = useState('all')
  const [defaultResponse, setDefaultResponse] = useState(nodes)
  const tabsHandler = (type) => {
    settabs(type)
    setActiveTabs(type)
  }
  const allTabsHandler = () => {
    setDefaultResponse(nodes)
    settabs('all')
    setActiveTabs('all')
  }

  const [nowIndex, setNowIndex] = useState(0)
  const [nowData, setNowData] = useState()

  const indexFunc = (elm) => {
    allTabs.filter((e, i) => {
      if (i === elm) {
        setNowIndex(i)
        setNowData(e)
      }
    })
  }

  useEffect(() => {
    if (nowData) {
      const found = nodes.filter(({ portfolioCategory }) =>
        portfolioCategory?.some(({ category }) => category === nowData)
      )
      setDefaultResponse(found)
      // return
      if (found?.length > 0) {
        setDefaultResponse(found)
      } else {
        setDefaultResponse(nodes)
      }
    } else {
      const found = nodes.filter(({ portfolioCategory }) =>
        portfolioCategory?.some(({ category }) => category === tabs)
      )
      setDefaultResponse(found)
      if (found?.length > 0) {
        setDefaultResponse(found)
      } else {
        setDefaultResponse(nodes)
      }
    }
  }, [tabs, nodes, nowData])

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-10 lg:right-[-1%]"
      ></button>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-10 lg:left-[-1%]"
      ></button>
    )
  }

  const tabsSettings = {
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 430,
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
          // centerPadding: '4px',
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <section
      className={portfolioSectionClasses}
      data-testid="portfolio-section"
    >
      <div className="max-w-[709px]  mx-auto text-center  px-2 lg:px-0 pb-10">
        <Heading type="h2" otherClasses="PortfolioSection_heading mb-3">
          {title}
        </Heading>
        <RichText
          richText={_rawSubText}
          otherClasses="portfoliosection_richtext"
        />
      </div>
      <div className="pt-4 pb-4 max-w-[900px] w-full mx-auto px-[30px]">
        <TabsSlider
          customSettings={tabsSettings}
          indexSet={(e) => indexFunc(e)}
          otherClasses=""
        >
          {allTabs.map((node, index) => {
            return (
              <div className="px-[4px] lg:px-[8px]">
                <button
                  key={index}
                  onClick={() => tabsHandler(node)}
                  className={clsx(
                    'hidden md:flex text-[13px] shadow-3xl w-full h-12 lg:h-8 py-[4px] px-[8px] items-center justify-center rounded-full font-satoshi  text-light_white opacity-70 leading-[22px] text-center',
                    activeTabs === node
                      ? 'bg-primary_green text-secondary_gray opacity-100 font-bold'
                      : 'font-normal  bg-white/[.05]'
                  )}
                >
                  {node}
                </button>
                <button
                  className={clsx(
                    nowIndex === index
                      ? 'bg-primary_green text-secondary_gray opacity-100 font-bold'
                      : 'font-normal  bg-white/[.05]',
                    'md:hidden flex text-[13px] shadow-3xl w-full h-12 lg:h-8 py-[4px] px-[8px] items-center justify-center rounded-full font-satoshi  text-light_white opacity-70 leading-[22px] text-center'
                  )}
                >
                  {node}
                </button>
              </div>
            )
          })}
        </TabsSlider>
      </div>

      <div className=" px-[30px]  grid-cols-1 lg:grid-cols-3 max-w-[1140px] mx-auto hidden md:grid gap-x-[24px]">
        {defaultResponse?.length > 0 &&
          defaultResponse.map((nodes, index) => {
            return <PortfolioCard key={nodes.title} {...nodes} index={index} />
          })}
      </div>

      <div className="md:hidden">
        <Slider customSettings={settings} customClass=" mt-[56px]">
          {defaultResponse?.length > 0 &&
            defaultResponse.map((nodes, index) => {
              return (
                <div className="px-4">
                  <PortfolioCard
                    key={nodes.title}
                    {...nodes}
                    index={index}
                    otherClasses="mx-4 sm:mx-6"
                  />
                </div>
              )
            })}
        </Slider>
      </div>
    </section>
  )
}

export default PortfolioSection

export const query = graphql`
  fragment PortfolioSection on SanityPortfolioSection {
    identifier
    __typename
    title
    _rawSubText
  }
`
