import React from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import projectIcon from '../../images/project-stage-icon.png'
import requiredTeamIcon from '../../images/required-team-icon.png'
import projectIndustryIcon from '../../images/project-industry-icon.png'
import projectConsultationIcon from '../../images/project-consultation-icon.png'
import projectDurationIcon from '../../images/project-duration-icon.png'
import dolarIcon from '../../images/dolar-icon.png'
import RadioButton from '../../components/RadioButton/RadioButton'
import IncrementDecrement from '../../components/IncrementDecrement/IncrementDecrement'
import CheckBox from '../../components/CheckBox/CheckBox'
import './requestthepriceofproject.scss'
export const RequestThePriceOfProject = ({ otherClasses }) => {
  const requestThePriceOfProjectClasses = clsx(
    otherClasses,
    'w-full bg-secondary_gray_300 py-[72px] lg:py-[100px]'
  )

  const arr = [
    {
      title: 'Project Stage',
      value: ['Mature product'],
    },
    {
      title: 'Required Team',
      value: ['2x React Developer', '1x Node Developer'],
    },
    {
      title: 'Project Industry',
      value: ['Financial Services'],
    },
    {
      title: 'Project Consultation',
      value: ['UI/UX Designer'],
    },
    {
      title: 'Project Duration',
      value: ['1 Month'],
    },
  ]

  return (
    <section
      className={requestThePriceOfProjectClasses}
      data-testid="request-the-price-of-project"
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 xl:px-[150px] lg:px-[100px]">
        <div className="mb-14 lg:mb-20 max-w-[853px] mx-auto w-full flex flex-col items-center gap-4">
          <Heading otherClasses="text-[25px] lg:text-[50px] leading-[33.75px] text-center lg:leading-[67.5px] font-satoshi font-bold why_angle_bracket_text_gradient">
            Request the price of your project
          </Heading>
          <p className="font-normal font-satoshi text-base leading-[21.6px] text-center text-light_white opacity-50">
            Fill out the form below to receive a free consultation and find out
            quotation and it’s free :)
          </p>
        </div>
        <div className="flex flex-col-reverse gap-14 lg:gap-10 xl:gap-14 lg:flex-row">
          <div className="w-full">
            <div className="pb-12 border-b-[1px] border-b-primary_green/20 border-dashed ">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={projectIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 capitalize"
              >
                Project Stage
              </Heading>
              <p className="text-base leading-6 text-light_white/50 font-satoshi font-normal mb-8">
                Select your current stage and update of your project
              </p>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <RadioButton
                  name="project-stage"
                  label="Idea"
                  id="project-stage"
                />
                <RadioButton
                  name="project-stage"
                  label="Prototype/Specification"
                  id="Prototype/Specification"
                />
                <RadioButton
                  name="project-stage"
                  label="Designed solution"
                  id="Designed solution"
                />
                <RadioButton name="project-stage" label="MVP" id="MVP" />
                <RadioButton
                  name="project-stage"
                  label="Mature product"
                  id="Mature product"
                />
              </div>
            </div>
            <div className="py-12 border-b-[1px] border-b-primary_green/20 border-dashed ">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={requiredTeamIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 capitalize"
              >
                Required Team
              </Heading>
              <p className="text-base leading-6 text-light_white/50 font-satoshi font-normal mb-8">
                Select type of developers you need in your project
              </p>
              <div className="grid sm:grid-cols-2 gap-4 ">
                <IncrementDecrement label="Angular Developer" />
                <IncrementDecrement label="React Developer" />
                <IncrementDecrement label="Vue Developer" />
                <IncrementDecrement label="Node Developer" />
                <IncrementDecrement label="React Native Developer" />
              </div>
            </div>
            <div className="py-12 border-b-[1px] border-b-primary_green/20 border-dashed ">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={projectIndustryIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 capitalize"
              >
                Project Industry
              </Heading>
              <p className="text-base leading-6 text-light_white/50 font-satoshi font-normal mb-8">
                Select type of project industry
              </p>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <RadioButton
                  name="Project Industry"
                  label="Financial Services"
                  id="Financial Services"
                />
                <RadioButton
                  name="Project Industry"
                  label="Media & Entertainment"
                  id="Media & Entertainment"
                />
                <RadioButton
                  name="Project Industry"
                  label="iGaming"
                  id="iGaming"
                />
                <RadioButton
                  name="Project Industry"
                  label="Automotive"
                  id="Automotive"
                />
                <RadioButton
                  name="Project Industry"
                  label="eCommerce"
                  id="eCommerce"
                />
                <RadioButton
                  name="Project Industry"
                  label="Enterprise"
                  id="Enterprise"
                />
                <RadioButton
                  name="Project Industry"
                  label="Logistics"
                  id="Logistics"
                />
                <RadioButton
                  name="Project Industry"
                  label="Manufacturing"
                  id="Manufacturing"
                />
                <RadioButton
                  name="Project Industry"
                  label="Aviation"
                  id="Aviation"
                />
                <RadioButton
                  name="Project Industry"
                  label="Telecom"
                  id="Telecom"
                />
                <RadioButton
                  name="Project Industry"
                  label="Healthcare"
                  id="Healthcare"
                />
                <RadioButton
                  name="Project Industry"
                  label="Retail"
                  id="Retail"
                />
              </div>
            </div>
            <div className="py-12 border-b-[1px] border-b-primary_green/20 border-dashed ">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={projectConsultationIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 capitalize"
              >
                Project Consultation
              </Heading>
              <p className="text-base leading-6 text-light_white/50 font-satoshi font-normal mb-8">
                Please select professional consultation from any of the
                specialists below
              </p>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                <CheckBox label="Project Manager" id="Project Manager" />
                <CheckBox label="Business Analyst" id="Business Analyst" />
                <CheckBox label="UI/UX Designer" id="UI/UX Designer" />
                <CheckBox label="Architect" id="Architect" />
                <CheckBox label="DevOps Engineer" id="DevOps Engineer" />
                <CheckBox
                  label="QA Automation Engineer"
                  id="QA Automation Engineer"
                />
              </div>
            </div>
            <div className="py-12 border-b-[1px] border-b-primary_green/20 border-dashed ">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={projectDurationIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 capitalize"
              >
                Project Duration
              </Heading>
              <p className="text-base leading-6 text-light_white/50 font-satoshi font-normal mb-8">
                Please specify expected duration of your project
              </p>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-[427px] lg:min-w-[427px] side_content_gradient p-12 rounded-[20px] h-fit lg:sticky lg:top-0">
            <div className="flex flex-col items-center">
              <div className="flex items-center w-[78px] h-[78px] rounded-full justify-center why_angle_brackets_card_image mb-6">
                <img
                  src={dolarIcon}
                  alt="project-stage-icon"
                  className="h-[30px] w-[30px] min-w-[30px] min-h-[30px]"
                />
              </div>
              <Heading
                type="h6"
                otherClasses="text-lg font-bold font-satoshi text-white leading-[24.3px] mb-2 text-center capitalize"
              >
                Project Pricing
              </Heading>
              <p className="text-sm font-normal text-center text-light_white/50 leading-5 font-satoshi">
                Your selected options will reflect here
              </p>
              <div className="flex flex-col gap-4 w-full mt-8">
                {arr.map(({ title, value }) => {
                  return (
                    <div className="flex items-start justify-between w-full">
                      <p className="text-sm font-bold leading-[18.9px] text-white font-satoshi">
                        {title}
                      </p>
                      <div className="flex flex-col">
                        {value.map((nodes) => {
                          return (
                            <p className="text-sm leading-[18.9px] text-right font-normal font-satoshi text-white/50">
                              {nodes}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RequestThePriceOfProject
