import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading/Heading'
import './meettheteamsection.scss'

import Slider from '../../components/Slider/Slider'
import { RichText } from '../../components/RichText'
import { Button } from '../../components/Button'
import Icon from '../../components/Icon/Icon'
import TabsSlider from '../../components/TabsSlider/TabsSlider'
import MeetTheTeamDeveloperCard from '../../components/MeetTheTeamDeveloperCard/MeetTheTeamDeveloperCard'

export const MeetTheTeamSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  isDarkTheme,
}) => {
  const meetTheTeamSectionClasses = clsx(
    otherClasses,
    'w-full pt-hero_pt_mob pb-hero_pb_mob lg:pt-hero_pt_desk lg:pb-hero_pb_desk',
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
          technologies {
            image {
              ...CustomImage
            }
          }
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
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[0.5%]  slider-btn-border-right z-10 lg:left-[-1%]"
      ></button>
    )
  }

  const TestimonailNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[0.5%] slider-btn-border-left z-10 lg:right-[-1%]"
      ></button>
    )
  }

  const [data, setData] = useState([])
  const [active, setActive] = useState(allTabs[0])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const allData = nodes.filter(
      ({ tab: { category: tabsCategory } }) => tabsCategory === active
    )
    setData(allData)
  }, [active, nodes])

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
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
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

  return (
    <section
      className={meetTheTeamSectionClasses}
      data-testid="meet-the-team-section"
    >
      <div className="max-w-[1440px] mx-auto  lg:px-[100px] xl:px-[150px]">
        <div className="mb-8 lg:mb-12 max-w-[1011px] mx-auto px-4 w-full flex flex-col items-center gap-4">
          <RichText
            richText={_rawSubText}
            otherClasses="MeetTheTeamSection_rich_text"
          />
          <div className="MeetTheTeamSection_heading">
            <Heading otherClasses="text-[25px] lg:px-[135px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
              {mainHeading}
            </Heading>
          </div>
        </div>

        <div className="pt-4 pb-16 max-w-[700px] mx-auto px-[60px] lg:px-0">
          <TabsSlider
            customSettings={tabsSettings}
            otherClasses="flex gap-4 mb-[56px] lg:mb-20 overflow-auto tabssroll_team"
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
                      'text-[13px] font-satoshi leading-[21.6px] px-[4px] w-full h-12 lg:h-8 py-[4px] flex items-center justify-center rounded-full ',
                      activeIndex === index
                        ? 'bg-primary_green text-secondary_gray font-bold'
                        : 'bg-[#FFFFFF0D] text-[#91999F]  font-normal '
                    )}
                  >
                    {node}
                  </button>
                </div>
              )
            })}
          </TabsSlider>
        </div>
        {data.length >= 3 ? (
          <div className="px-2">
            <Slider customSettings={settings} customClass="px-4">
              {data.map((nodes, index) => {
                return (
                  <div className="px-2" key={index}>
                    <MeetTheTeamDeveloperCard
                      {...nodes}
                      otherClasses="team_card_text"
                    />
                  </div>
                )
              })}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {data.map((nodes, index) => {
              return (
                <div className="px-2" key={index}>
                  <MeetTheTeamDeveloperCard
                    {...nodes}
                    otherClasses="team_card_text"
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default MeetTheTeamSection

export const query = graphql`
  fragment MeetTheTeamSection on SanityMeetTheTeamSection {
    __typename
    identifier
    mainHeading
    _rawSubText
    isDarkTheme
  }
`
