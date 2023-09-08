import React,{useState,useEffect} from 'react'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './aboutherosection.scss'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import { graphql } from 'gatsby'
import RichText from '../../components/RichText/RichText'
import Stats from '../../components/Stats/Stats'

import decoratorImageDesktop from './../../images/about-hero-section-desktop.png'
import decoratorImageMobile from './../../images/about-hero-section-mobile.png'

export const AboutHeroSection = ({ otherClasses, _rawSubText, button ,cards,isDecorator,isLargePadding}) => {
  const aboutHeroSectionClasses = clsx(
    otherClasses,
    'w-full pt-hero_pt_mob lg:pt-hero_pt_desk  lg:mt-[0px] bg-secondary_gray_300  relative overflow-x-clip', !isDecorator && !isLargePadding && 'pb-[80px] lg:pb-[100px]',isLargePadding&&' pb-[350px] lg:pb-[300px]'
  )
  const [entered, setEntered] = useState(false)

  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.to('.client_main_container_selector', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#fast-facts',
        start: 'top 90%',
        end: 'bottom 60%',
        onEnter: () => {
          setEntered(true)
        },
      },
    })
  }, [])

  return (
    <section
      className={aboutHeroSectionClasses}
      data-testid="about-hero-section"
    >
      <span className=" hidden lg:block absolute top-[-13.99px] right-[-285.86px]">
        <Icon
          icon="hero-section-decorator"
          iconHeight={592.72}
          iconWidth={665.43}
        />
      </span>
      <div className="max-w-[1011px] px-6 mx-auto w-full">
        {_rawSubText && (
          <div className="about_hero_section_richtext">
            <RichText richText={_rawSubText} />
          </div>
        )}
        <div className="flex justify-center pt-20">
          <Button {...button} />
        </div>
      </div>

      {cards && (
          <div
            className="w-full bg-secondary_gray_300  pt-[91px] lg:pt-[120px]"
            data-testid="technologies-hero-section-stats-section"
            id="fast-facts"
          >
            <div className={clsx("client_main_container_selector max-w-[800px] mx-auto w-full gap-y-8 gap-x-0 lg:px-0 px-6 flex flex-col lg:flex-row justify-center lg:justify-between",cards.length>3?'md:grid-cols-4': 'md:grid-cols-3')}>
              {cards?.map((nodes, index) => {
                return <Stats {...nodes} key={index} entered={entered} />
              })}
            </div>
          </div>
        )}

       {isDecorator&& 
       <>
       <img src={decoratorImageDesktop} alt='decorator' className='!hidden lg:!flex relative bottom-0 mx-auto  justify-center items-center mt-[60px] ' />

       <img src={decoratorImageMobile} alt='decorator' className='flex lg:!hidden relative bottom-0 mx-auto  justify-center items-center mt-[50px] ' />
       
       </>
       }
    </section>
  )
}

export default AboutHeroSection

export const query = graphql`
fragment AboutHeroSection on SanityAboutHeroSection {
  __typename
  identifier
  button {
    ...Button
  }
  cards {
    count
    labels
  }
  isDecorator
  isLargePadding
  _rawSubText
}
`
