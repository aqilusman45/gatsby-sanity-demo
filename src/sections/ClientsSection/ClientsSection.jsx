import React,{useState,useEffect} from 'react'
import clsx from 'clsx'
import Stats from '../../components/Stats/Stats'
import './clientsection.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { graphql } from 'gatsby'

export const ClientsSection = ({ otherClasses, cards }) => {
  const ClientsSectionClasses = clsx(
    otherClasses,
    'w-full bg-secondary_gray_300 pb-[60px] lg:pb-[100px]'
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
    <section className={ClientsSectionClasses} data-testid="stats-section" id ='fast-facts'>
      <div className="client_main_container_selector max-w-[800px] mx-auto w-full lg:px-0 px-6 gap-20 md:gap-0 flex flex-col md:flex-row  justify-between items-center">
        {cards.map((nodes,index) => {
          return <Stats  {...nodes} key = {index} entered={entered} />
        })}
      </div>
    </section>
  )
}

export default ClientsSection

export const query = graphql`
fragment ClientsSection on SanityClientsSections {
  __typename
  pageIdentifier
  cards {
    count
    labels
    slug {
      current
    }
  }
}
`
