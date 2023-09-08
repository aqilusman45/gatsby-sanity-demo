import React from 'react'
import clsx from 'clsx'
import {graphql,Link} from 'gatsby'

import Heading from '../../components/Heading'
import Icon from '../../components/Icon'
import RichText from '../../components/RichText'
import Image from '../../components/Image'

import './establishedenterprisesection.scss'

export const EstablishedEnterpriceSection = ({ otherClasses, mainHeading, _rawSubText, cards }) => {
  const EstablishedEnterpriceSectionClasses = clsx(
    otherClasses,
    'py-section_py_mob lg:py-section_py_desk bg-secondary_gray relative overflow-hidden'
  )

  return (
    <section
      className={EstablishedEnterpriceSectionClasses}
      data-testid="established-enterprise-section"
    >
      <span className="block absolute top-[-130px] lg:top-[-78px] left-[-100px]">
        <Icon
          icon="developer-teams-section-decorator"
          iconHeight={460}
          iconWidth={460}
        />
      </span>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] xl:px-[188px]">
        <div className="flex flex-col items-center gap-3 mb-12">
         {mainHeading && <Heading
            type="h5"
            className="text-[22px] leading-[29.7px] text-primary_green font-bold font-satoshi text-center"
          >{mainHeading}
          </Heading>}
          <div className='established_enterprise_rich_text'>
            <RichText richText={_rawSubText} />
          </div>
        </div>
        <div className='flex justify-center lg:flex-row lg:justify-between gap-6 lg:gap-0 items-center flex-wrap'>
          {cards.map(({ logo ,slug:{current}},index) => {
            return (
              <Link to={`/${current}`}>
              <Image imageData={logo} key = {index} otherClasses='mx-auto max-w-[113.35px] lg:max-w-[130px] max-h-[35px] lg:max-h-[40.42px] '/>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EstablishedEnterpriceSection

export const query = graphql`
fragment EstablishedEnterpriseSection on SanityEstablishedEnterpriseSection {
  __typename
  identifier
  mainHeading
  _rawSubText
  cards {
    name
    slug{
      current
    }
    logo {
      ...CustomImage
    }
  }
}
`
