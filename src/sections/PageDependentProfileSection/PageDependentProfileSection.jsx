import React from 'react'
import clsx from 'clsx'
import { graphql } from 'gatsby';
import Icon from '../../components/Icon/Icon';
import AngleBracketsDevelopersCard from '../../components/AngleBracketsDevelopersCard/AngleBracketsDevelopersCard';
import { RichText } from '../../components/RichText';
import Heading from '../../components/Heading/Heading';
import Slider from '../../components/Slider/Slider';
import './pagedependentprofilesection.scss'

export const PageDependentProfileSection = ({
  otherClasses,
  mainHeading,
  _rawSubText,
  isDarkTheme,
  cards
}) => {
  const pageDependentProfileSectionClasses = clsx(otherClasses, 'w-full overflow-x-clip py-section_py_mob  lg:py-section_py_desk relative ',isDarkTheme ?'bg-secondary_gray_300' :' bg-secondary_gray');
  
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

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    arrows:true,
    autoplay: false,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    nextArrow: <TestimonailNextArrow />,
    prevArrow: <TestimonailPrevArrow />,
  }

  return (
    <section className={pageDependentProfileSectionClasses} data-testid='page-dependent-profile-section'>
 
 
       <Icon icon='top-corner-pattern' iconHeight={460} iconWidth={460} otherClasses='absolute top-0 right-[-90px]' />
     <div className="relative z-10 max-w-[1440px]  w-full mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center w-full lg:max-w-4xl mb-[56px] lg:mb-20">
          {mainHeading && (
            <Heading
              type="h2"
              otherClasses="font-bold font-satoshi text-[25px] mb-4 leading-8 lg:leading-[68px] why_angle_bracket_text_gradient lg:text-[50px]"
            >
              {mainHeading}
            </Heading>
          )}
          <div className="pagedependentprofilesection_rich_text">
            <RichText richText={_rawSubText} otherClasses="font-satoshi font-normal text-base leading-[22px] text-light_white opacity-50" />
          </div>
        </div>
        <div className=" w-full lg:px-[100px] xl:px-[150px] h-auto">
          <Slider
            customClass="px-6 md:px-8 lg:px-4 pagedependentprofilesection_developer_slider"
            customSettings={settings}
          >
            {cards.map((node,index) => {
              return (
                <div className="px-2 text-left" key ={index}>
                  <AngleBracketsDevelopersCard {...node} type='secondary'  />
                </div>
              )
            })}
          </Slider >
         
        </div>
      </div>
      <Icon icon='bottom-corner-pattern' iconHeight={460} iconWidth={460} otherClasses='absolute bottom-0 left-[-120px]' />
    </section>
  );
};

export default PageDependentProfileSection;


export const query = graphql`
fragment PageDependentProfileSection on SanityPageDependentProfileSections {
  __typename
  identifier
  isDarkTheme
  mainHeading
  _rawSubText
  cards {
    image {
      ...CustomImage
    }
    name
    position{
      title
    }
    description
    technologies {
      image {
        ...CustomImage
      }
    }
    slug {
      current
    }
  }
}
`