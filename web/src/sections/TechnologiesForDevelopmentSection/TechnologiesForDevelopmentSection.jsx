import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import WhyAngleBracketsCard from '../../components/WhyAngleBracketsCard/WhyAngleBracketsCard'
import Slider from '../../components/Slider/Slider'
import './technologiesfordevelopmentsection.scss'
import { graphql } from 'gatsby'
import { RichText } from '../../components/RichText'
import TabsSlider from '../../components/TabsSlider/TabsSlider'

export const TechnologiesForDevelopmentSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  cards,
}) => {
  const technologiesForDevelopmentSectionClasses = clsx(
    otherClasses,
    'w-full bg-secondary_gray pt-section_py_mob pb-[130px] lg:py-section_py_desk'
  )
  

  const allTabs = [...new Set(cards.map(({ tab: { category } }) => category))]
  const TestimonailPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      >
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

  const [toggle, setToggle] = useState(0)
  const [data, setData] = useState([])

  const toggleFilter = (category, index) => {
    const filterNodes = cards.filter(
      ({ tab: { category: cardCategory } }) => cardCategory === category
    )
    setData(filterNodes)
    setToggle(index)
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
    if(nowData){
      const allCards = cards?.filter(
        ({ tab: { category } }) => category === nowData
        )
        setData(allCards)
      }
    else{

      const allCards = cards?.filter(
        ({ tab: { category } }) => category === allTabs[0]
        )
        setData(allCards)
      }
        

  }, [cards,nowData]) // eslint-disable-line react-hooks/exhaustive-deps

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow:  <TestimonailPrevArrow />,
    nextArrow:<TestimonailNextArrow />,
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
    touchMove:false,
    draggable: false,

    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
  }


  return (
    <section
      className={technologiesForDevelopmentSectionClasses}
      data-testid="technologies-for-development-section"
    >
      <div className="max-w-[1440px] mx-auto w-full  lg:px-[100px] xl:px-[150px]">
        <div className="mb-8 lg:mb-12 px-4 max-w-[840px] mx-auto w-full flex flex-col items-center gap-4">
          <Heading otherClasses="text-[25px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
            {mainHeading}
          </Heading>
          <div className="technologiessection_rich_text">
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <div className="pt-4 pb-16 max-w-[700px] mx-auto px-[60px] lg:px-0">
          <TabsSlider
          indexSet={(e) => indexFunc(e)}
            customSettings={tabsSettings}
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
                      toggle === index
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

        <div className="lg:grid grid-cols-3 gap-8 hidden ">
          {data?.map(({ cards }, index) => {
            return (
              <WhyAngleBracketsCard key={index} {...cards} type="primary" />
            )
          })}
        </div>
        <div className="lg:hidden">
          <Slider
            customSettings={settings}
            customClass="relative angle_brackets_developer_slider px-6 md:px-8 lg:px-4"
          >
            {data?.map(({ cards }, index) => {
              return (
                <div className="px-2" key={index}>
                  <WhyAngleBracketsCard {...cards} type="primary" />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TechnologiesForDevelopmentSection

export const query = graphql`
  fragment TechnologiesSection on SanityTechnologiesSections {
    __typename
    identifier
    mainHeading
    _rawSubText
    cards {
      tab {
        category
      }
      cards {
        heading
        image {
          ...CustomImage
        }
        subText
      }
    }
  }
`
