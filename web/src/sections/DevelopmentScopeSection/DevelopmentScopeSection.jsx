import React,{useState} from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import { graphql } from 'gatsby'
import './Developmentscopesection.scss'
import RichText from '../../components/RichText/RichText'
import DevelopmentScopeCard from '../../components/DevelopmentScopeCard/DevelopmentScopeCard'

export const DevelopmentScopeSection = ({ otherClasses, mainHeading,_rawSubText, cards }) => {
  const developmentScopeSectionClasses = clsx(
    otherClasses,
    'bg-secondary_gray '
  )

  const data = cards.map(({heading})=>{
    return heading
  })
  const [tab,setTab] = useState(data[0]);


const toggleFilter = (node)=>{
  setTab(node)
}


  return (
    <section
      className={developmentScopeSectionClasses}
      data-testid="development-scope-section"
    >
      <div className="max-w-[1440px] mx-auto lg:px-20 xl:px-[150px] pt-[72px] pb-[72px] lg:pb-[0] lg:pt-[100px] ">
        <div className="flex w-full flex-col justify-center items-center">
          <div className="lg:w-[895px] text-center px-[24px] pb-[32px] lg:pb-[0]">
            <Heading
              type="h2"
              otherClasses="why_angle_bracket_text_gradient  text-[25px] lg:text-[50px] leading-[34px] lg:leading-[67.5px]"
            >
            {  mainHeading}
            </Heading>
            <RichText otherClasses='developement_scope_intro_rich_text' richText={_rawSubText} />
          </div>
            <div className=" languages_btns overflow-x-auto  pb-[28px] mb-[28px] lg:pb-[40px] lg:mb-[40px]  flex gap-[16px] lg:mt-[48px]">
              {data.map((node,index)=>{
               return( <button
                key={index}
                onClick={()=>toggleFilter(node)}
                className={clsx(
                  'text-[13px] font-satoshi leading-[21.6px] py-[7px] px-[30px] rounded-full whitespace-nowrap',
                  tab === node
                    ? 'bg-primary_green text-secondary_gray font-bold'
                    : 'bg-[#FFFFFF0D] text-[#91999F]  font-normal '
                )}
              >
                {node}
              </button>)
              })}
            </div>
              <DevelopmentScopeCard  {...cards.find(({heading})=>heading === tab)}/>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentScopeSection

export const query = graphql`
  fragment BackendSections on SanityBackendSections {
    __typename
    identifier
    mainHeading
    _rawSubText
    cards {
      heading
      logo {
        ...CustomImage
      }
      _rawAbout
      _rawText
      services {
        list
      }
    }
  }
`
