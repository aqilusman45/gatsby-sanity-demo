import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Heading from '../../components/Heading'
import AngelBracketProjectCard from '../../components/AngelBracketProjectCard'
import Slider from '../../components/Slider'
import RichText from '../../components/RichText'
import TabsSlider from '../../components/TabsSlider/TabsSlider'

import './angelbracketproject.scss'
import Icon from '../../components/Icon/Icon'

export const AngelBracketProjectSection = ({
  mainHeading,
  _rawSubText,
  otherClasses,
  cards,
}) => {
  const angelBracketProjectSectionClasses = clsx(
    otherClasses,
    'py-section_py_mob lg:pt-section_py_desk bg-secondary_gray'
  )

  const TestimonailPrevArrow = (props) => {
    const { onClick } = props

    return (
      <button onClick={onClick} className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]">
      </button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      >
      </button>
    )
  }

  const {
    allSanityPortfolio: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityPortfolio {
        nodes {
          title
          slug {
            current
          }
          portfolioCategory {
            category
          }
          technologies {
            category
          }
          desktopImage {
            ...CustomImage
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

  const [defaultResponse, setDefaultResponse] = useState(null)
  const [tabs, settabs] = useState(allTabs[0])
  const [activeTab, setActiveTab] = useState(allTabs[0])
  const tabsHandler = (type) => {
    settabs(type)
    setActiveTab(type)
  }

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
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
    prevArrow: <TestimonailPrevArrow />,
   nextArrow: <TestimonailNextArrow />,
  }

  const tabsSettings = {
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 3,
    draggable: false,
    touchMove:false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      return
    } else {
      const found = nodes.filter(({ portfolioCategory }) =>
        portfolioCategory?.some(({ category }) => category === tabs)
      )
      setDefaultResponse(found)
    }
  }, [tabs, nodes, nowData])



  return (
    <section
      className={angelBracketProjectSectionClasses}
      data-testid="angel-bracket-project-section"
    >
      <div className="max-w-[1440px] lg:px-[100px] xl:px-[150px] mx-auto w-full flex flex-col items-center text-center   opacity-90">
        {mainHeading && (
          <Heading
            type="h2"
            otherClasses="mb-4 px-6 lg:px-0 why_angle_bracket_text_gradient text-[25px] font-satoshi font-bold leading-[33.75px] lg:leading-[68px] lg:text-[50px]"
          >
            {mainHeading}
          </Heading>
        )}
        <div className="anglebracketprojectsection_rich_text  px-6 lg:px-0 mx-48 w-full lg:w-[725px] mb-12 ">
          <RichText richText={_rawSubText} />
        </div>
        <div className="pt-4 px-[60px] lg:px-0 pb-16 w-full sm:max-w-[700px] mx-auto">
          <TabsSlider
            indexSet={(e) => indexFunc(e)}
            customSettings={tabsSettings}
            otherClasses="flex gap-4 mb-[56px] lg:mb-20 pb-8 lg:pb-0 tabssroll_team"
          >
            {allTabs.map((node, index) => {
              return (
                <div className="px-[4px] lg:px-[8px]">
                  <button
                    key={index}
                    onClick={() => tabsHandler(node)}
                    className={clsx(
                      'hidden md:flex text-[13px] shadow-3xl w-full h-12 lg:h-8 py-[4px] px-[8px] items-center justify-center rounded-full font-satoshi  text-light_white opacity-70 leading-[22px] text-center',
                      activeTab === node
                        ? 'bg-primary_green text-secondary_gray opacity-100 font-bold'
                        : 'font-normal  bg-white/[.05]'
                    )}
                  >
                    {node}
                  </button>
                  <button
                    className={clsx(
                      nowIndex === index ? 'bg-primary_green text-secondary_gray opacity-100 font-bold' : 'font-normal  bg-white/[.05]',
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

        <div className="w-full mx-auto  max-w-[1140px]">
          <Slider
            customClass="relative px-6 md:px-8 lg:px-4 angle_brackets_project_slider"
            customSettings={settings}
          >
            {defaultResponse &&
              defaultResponse.map((nodes, index) => {
                return (
                  <Link
                    to={`/portfolio/${nodes.slug.current}`}
                    className=" px-2 text-left"
                    key={index}
                  >
                    <AngelBracketProjectCard {...nodes} otherClasses="" />
                  </Link>
                )
              })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
export default AngelBracketProjectSection

export const query = graphql`
  fragment ProjectSections on SanityProjectSections {
    __typename
    identifier
    mainHeading
    _rawSubText
    cards {
      tab {
        category
      }
      heading
      hoverImage {
        ...CustomImage
      }
      _rawSubText
      technologies {
        category
      }
    }
  }
`
