import React from 'react'
import clsx from 'clsx'
import './profilesection.scss'
import Image from '../../components/Image'
import Icon from '../../components/Icon/Icon'
import RichText from '../../components/RichText/RichText'
import githubicon from '../../images/github-icon.png'


export const ProfileSection = ({
  otherClasses,
  image,
  name,
  position:{title},
  location,
  skills,
  linkedinUrl,
  githubUrl,
  twitterUrl,
  _rawAbout,
  industries,
  technologies
}) => {
  const profileSectionClasses = clsx(otherClasses, 'bg-secondary_gray_300')

  return (
    <section className={profileSectionClasses} data-testid="profile-section">
      <div className="profilesection_gradient_bg h-[267px] w-full"></div>
      <div className="max-w-[1440px] mx-auto w-full lg:px-0 px-6 pb-[60px] lg:pb-[70px]">
        <div className="flex items-center flex-col justify-center mt-[-68px]">
          <Image imageData={image} otherClasses="w-[150px] h-[150px]" />
          <h1 className="pt-6 pb-2 font-satoshi font-bold text-[30px] leading-[41px] text-center general_title_gradient ">
            {name}
          </h1>
          <p className="font-satoshi font-bold text-lg leading-6 text-center general_title_gradient ">
            {title}
          </p>
          <div className="flex flex-col lg:flex-row gap-[56px] mt-[80px] px-6 lg:px-20 xl:px-[150px]">
            <div className="w-full">
              <p className="text-white font-satoshi font-bold text-xl">About</p>
              <div className="profile_about_rich_text mt-4 mb-5">
                <RichText richText={_rawAbout} />
              </div>
              <div className={clsx((industries.length > 0)?"block":"hidden")}>
              <p className="pt-[56px] text-white font-satoshi font-bold text-xl">
                Industries
              </p>
              <div className='flex gap-4 mt-4 pb-[56px]'>
              {industries.map(({image}, index) => {
                return <Image imageData={image} key={index} />
              })}
              </div>
              </div>
              <div className={clsx((technologies.length > 0)?"block":"hidden")}>
              <p className=" text-white font-satoshi font-bold text-xl">
                Technologies
              </p>
              <div className='flex gap-4 mt-4'>
              {technologies.map(({image}, index) => {
                return <Image imageData={image} key={index} />
              })}
              </div>
              </div>
            </div>
            <div className={clsx("w-full lg:sticky top-20 lg:min-w-[434px] h-fit lg:max-w-[434px] profilesection_gradient_bg py-8 px-8 rounded-[20px]",(skills.length > 0)?"block":"hidden")}>
              {/* {location && (
                <>
                  <p className="mb-[18px] text-white font-satoshi font-bold text-base leading-[22px] capitalize ">
                    Location
                  </p>
                  <div className="flex gap-3">
                    <Icon icon="location" iconHeight={20} iconWidth={16} />
                    <p className="text-white font-satoshi text-base leading-[22px] text-center opacity-50">
                      {location}
                    </p>
                  </div>
                </>
              )} */}
              {skills.length > 0 && (
                <>
                  <p className=" text-white font-bold text-base leading-[22px] capitalize mb-4">
                    Skills
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {skills.map(({title},index) => {
                      return (
                        <p key={index} className="skills_gradient text-xs  lg:text-sm lg:leading-6 text-light_white py-2 px-6 w-fit opacity-50">
                          {title}
                        </p>
                      )
                    })}
                  </div>
                </>
              )}

              {
                ((twitterUrl || linkedinUrl ||githubUrl )&& (
                  <p className=" pt-[33px] text-white font-bold text-base leading-[22px] capitalize mb-4">
                    Social
                  </p>
                ))}
              <div className="flex gap-4">
                 {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="linkedin" iconHeight={24} iconWidth={24} />
                  </a>
                )} 
                 {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <img src={githubicon} alt="Github-Icon" /> */}
                    <Icon icon="footer-github" iconHeight={24} iconWidth={24} />
                  </a>
                )} 
              {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="twitter" iconHeight={24} iconWidth={24} />
                  </a>
                )} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection
