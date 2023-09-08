import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import './anglebracketsdevelopers.scss'
import AngleBracketsDevelopersCard from '../../components/AngleBracketsDevelopersCard/AngleBracketsDevelopersCard'
import Slider from '../../components/Slider/Slider'
import { RichText } from '../../components/RichText'
import { Button } from '../../components/Button'
import Icon from '../../components/Icon/Icon'
import TabsSlider from '../../components/TabsSlider/TabsSlider'
export const AngleBracketsDevelopers = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  isDarkTheme,
  isOrderedDevelopers,
  isProfilePageSection,
}) => {
  const angleBracketsDevelopersClasses = clsx(
    otherClasses,
    'w-full pt-section_py_mob pb-[130px] lg:py-section_py_desk',
    isDarkTheme ? 'bg-secondary_gray_300' : 'bg-[#192a35] '
  )

  const {
    allSanityProfile: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityProfile {
        nodes {
          slug {
            current
          }
          image {
            ...CustomImage
          }
          tab {
            category
          }
          name
          position {
            title
          }
          description
        }
      }
    }
  `)

  const allTabs = [...new Set(nodes.map(({ tab: { category } }) => category))]
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

  const [data, setData] = useState([])
  const [active, setActive] = useState(allTabs[0])
  const [activeIndex, setActiveIndex] = useState(0)

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
      const allData = nodes.filter(
        ({ tab: { category: tabsCategory } }) => tabsCategory === nowData
      )
      setData(allData)
      return
    } else {
      const allData = nodes.filter(
        ({ tab: { category: tabsCategory } }) => tabsCategory === active
      )
      setData(allData)
    }
  }, [active, nodes, nowData])

  const toggleFilter = (node, index) => {
    setActive(node)
    setActiveIndex(index)
  }
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <TestimonailPrevArrow />,
    nextArrow: <TestimonailNextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const tabsSettings = {
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    touchMove: false,
    slidesToShow: 3,
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

  const orderDevelopers = ['Sunny Rana', 'Bahroz Javed', 'Qazi Zohaib']

  let orderedDevelopers = orderDevelopers.map((item) =>
    data?.find((node) => node?.name === item)
  )


  return (
    <section
      className={angleBracketsDevelopersClasses}
      data-testid="angle-brackets-developers"
    >
      <div className="max-w-[1440px] mx-auto  lg:px-[100px] xl:px-[150px]">
        <div className="mb-8 lg:mb-12 max-w-[913px] mx-auto px-4 w-full flex flex-col items-center gap-4">
          <Heading otherClasses="text-[25px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
            {mainHeading}
          </Heading>
          <div className="anglebracketsdevelopers_rich_text">
            <RichText richText={_rawSubText} />
          </div>
        </div>

        <div className="pt-4 pb-16 max-w-[700px] mx-auto px-[60px] lg:px-0">
          <TabsSlider
            customSettings={tabsSettings}
            indexSet={(e) => indexFunc(e)}
            otherClasses="flex gap-4 mb-[56px] lg:mb-20 overflow-auto pb-8 lg:pb-0 tabssroll_team"
          >
            {allTabs.map((node, index) => {
              return (
                <div className="px-[4px] lg:px-[8px]">
                 

                  <button
                    key={index}
                    onClick={() => {
                      toggleFilter(node, index)
                    }}
                    className={clsx(
                      'hidden md:flex text-[13px] shadow-3xl w-full h-12 lg:h-8 py-[4px] px-[8px] items-center justify-center rounded-full font-satoshi  text-light_white opacity-70 leading-[22px] text-center',
                      activeIndex === index
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
        {isProfilePageSection ? (
          <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-8 hidden">
            {data && (
              <>
                {data?.map((nodes, index) => {
                  return (
                    <div>
                      <AngleBracketsDevelopersCard
                        key={index}
                        {...nodes}
                        otherClasses="team_card_text"
                      />
                    </div>
                  )
                })}
              </>
            )}
          </div>
        ) : (
          <div className="lg:grid grid-cols-2 xl:grid-cols-3 gap-8 hidden">
            {data && (
              <>
                {active === 'Front-end' && isOrderedDevelopers
                  ? orderedDevelopers.map((nodes, index) => {
                      return (
                        <div>
                          {index < 3 && (
                            <AngleBracketsDevelopersCard
                              key={index}
                              {...nodes}
                              otherClasses="team_card_text"
                            />
                          )}
                        </div>
                      )
                    })
                  : data?.map((nodes, index) => {
                      return (
                        <div>
                          {index < 3 && (
                            <AngleBracketsDevelopersCard
                              key={index}
                              {...nodes}
                              otherClasses="team_card_text"
                            />
                          )}
                        </div>
                      )
                    })}
              </>
            )}
            {/* {data?.length > 3 && ( */}
            {/* <div className="flex justify-center items-center">
      <Button
        label="Meet the Team"
        slug={{ current: 'meet-the-team' }}
      />
    </div> */}
            {/* )} */}
          </div>
        )}
        <div className="mt-12 lg:flex justify-center items-center hidden">
          <Button label="Meet the Team" slug={{ current: 'meet-the-team' }} />
        </div>

        <Slider
          customSettings={settings}
          customClass="angle_brackets_developer_slider px-6 md:px-8 lg:px-4 lg:!hidden"
        >
          {data.map((nodes, index) => {
            return (
              <div className="px-2" key={index}>
                <AngleBracketsDevelopersCard
                  {...nodes}
                  otherClasses="team_card_text"
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default AngleBracketsDevelopers

export const query = graphql`
  fragment ProfileSection on SanityProfileSections {
    __typename
    identifier
    isOrderedDevelopers
    mainHeading
    _rawSubText
    isProfilePageSection
    isDarkTheme
  }
`
