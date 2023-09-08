import React, { useState, useEffect } from 'react'

import clsx from 'clsx'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import './careeropportunitiessection.scss'
import TabsSlider from '../../components/TabsSlider/TabsSlider'
import Slider from '../../components/Slider/Slider'
import Icon from '../../components/Icon/Icon'
import search_icon from '../../images/angleBrackets-icons/search.svg'

import CareerOpportunitiesCard from '../../components/CareerOpportunitiesCard'
import useDebounce from '../../utils/debouce'
import ContactFormModal from '../../components/ContactFormModal/ContactFormModal'

export const CareerOpportunitiesSection = ({
  otherClasses,
  _rawSubText,
  cards,
}) => {
  const careerOpportunitiesSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray pt-section_py_mob pb-[130px] lg:pb-[70px] lg:pt-section_py_desk px-6 lg:px-[100px] xl:px-[150px]'
  )
  const SliderPrevArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] left-[1.5%] slider-btn-border-right z-15 lg:left-[-1%]"
      ></button>
    )
  }

  const SliderNextArrow = (props) => {
    const { onClick } = props
    return (
      <button
        onClick={onClick}
        className="absolute bottom-[47%] right-[1.5%] slider-btn-border-left z-15 lg:right-[-1%]"
      ></button>
    )
  }

  const allTabs = [...new Set(cards.map(({ tab: { category } }) => category))]

  const [toggle, setToggle] = useState(0)
  const [data, setData] = useState([])
  const [searchedValue, setSearchedValue] = useState('')

  const toggleFilter = (category, index) => {
    const filterNodes = cards.filter(
      ({ tab: { category: cardCategory } }) => cardCategory === category
    )
    setData(filterNodes)
    setToggle(index)
  }

  useEffect(() => {
    const allCards = cards?.filter(
      ({ tab: { category } }) => category === allTabs[0]
    )
    setData(allCards)
  }, [cards])

  const tabsSettings = {
    infinite: false,
    speed: 500,
    cssEase: 'linear',
    slidesToScroll: 1,
    slidesToShow: 5,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerPadding: '4px',
          slidesToShow: 2,
        },
      },
    ],
  }

  const getSearchData = () => {
    const newArr = cards.filter(({ heading }) => {
      return heading.toLowerCase().includes(searchedValue.toLowerCase())
    })
    setData(newArr)

    if (searchedValue.trim().length === 0) {
      setData(cards)
    }
  }

  const debouncedValue = useDebounce(searchedValue, 500)
  useEffect(() => {
    searchedValue.length >= 0 && getSearchData(debouncedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <SliderPrevArrow />,
    prevArrow: <SliderNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const filterBySearch = (event) => {
    setSearchedValue(event.target.value)
  }

  const handleClear = () => {
    setSearchedValue('')
    const filterNodes = cards.filter(
      ({ tab: { category: cardCategory } }) => cardCategory === allTabs[0]
    )
    setData(filterNodes)
    setToggle(0)
  }

  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')

  const toggleShow = (heading) => {
    setShow(true)
    setTitle(heading)
  }
  const toggleCancel = () => {
    setShow(false)
  }

  return (
    <section
      className={careerOpportunitiesSectionClasses}
      data-testid="career-opportunities-section"
      id="apply-now"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1140px] mx-auto">
          <div className="max-w-[877px] text-center mx-auto ">
            <RichText
              richText={_rawSubText}
              otherClasses="CareerOpportunitiesSection_richtext"
            />
          </div>
          <div className="px-[24px]">
            <div className="flex search_bar items-center px-[30px] h-[48px] mx-auto lg:mt-[48px] mt-[30px] max-w-[640px] rounded-[100px]  font-normal bg-[#2c3b46] text-[#91999F]  ">
              <input
                type="text"
                onChange={(e) => filterBySearch(e)}
                className="w-full bg-[#2c3b46] text-[#91999F] "
                name=""
                value={searchedValue}
                id="CareerOpportunitiesSec_search"
                placeholder="Find your perfect role"
              />
              {searchedValue.length !== 0 ? (
                <button onClick={() => handleClear()}>
                  <Icon
                    icon="navbar-cancel-icon"
                    iconHeight={24}
                    iconWidth={24}
                  />
                </button>
              ) : (
                <img src={search_icon} alt="" className="search_img" />
              )}
            </div>
          </div>

          <div className="py-16 max-w-[700px] mx-auto px-[30px]">
            <TabsSlider
              customSettings={tabsSettings}
              otherClasses="flex gap-4 mb-[56px] lg:mb-20 overflow-auto pb-8 lg:pb-0 tabssroll_team"
            >
              {allTabs.map((node, index) => {
                return (
                  <div className="px-2">
                    <button
                      key={index}
                      onClick={() => {
                        toggleFilter(node, index)
                      }}
                      className={clsx(
                        'text-[13px] font-satoshi w-full leading-[21.6px] py-[8px] px-0 rounded-full whitespace-nowrap',
                        toggle === index
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
          <div
            className={clsx(
              data.length > 0
                ? 'lg:grid grid-cols-3 gap-4 hidden px-4 xl:px-0'
                : 'flex justify-center items-center'
            )}
          >
            {data.length > 0 ? (
              data?.map((cards) => {
                return (
                  <CareerOpportunitiesCard
                    toggleModal={toggleShow}
                    {...cards}
                  />
                )
              })
            ) : (
              //  searchedValue === "" ?(
              //   data?.map((cards) => {
              //     return <CareerOpportunitiesCard {...cards} />
              //   })
              // )
              // :
              <div className="flex justify-center items-center pb-20 pt-20 notfound_style font-bold text-2xl  ">
                {' '}
                Not Found{' '}
              </div>
            )}
          </div>

          <div className="lg:hidden w-full">
            <Slider
              customSettings={settings}
              customClass="relative px-6 md:px-8 lg:px-4 angle_brackets_developer_slider"
            >
              {data?.map((cards) => {
                return (
                  <div className="px-2">
                    <CareerOpportunitiesCard
                      toggleModal={toggleShow}
                      {...cards}
                    />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>

      <ContactFormModal show={show} title={title} handleClose={toggleCancel} />
    </section>
  )
}

export default CareerOpportunitiesSection

export const query = graphql`
  fragment CareerOpportunitiesSection on SanityCareerOpportunitiesSection {
    __typename
    identifier
    _rawSubText
    cards {
      tab: tabName {
        category
      }
      heading
      _rawSubText
      button {
        ...Button
      }
    }
  }
`
