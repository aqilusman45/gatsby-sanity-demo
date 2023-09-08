import React, { useState, useCallback, useEffect } from 'react'
import clsx from 'clsx'
import Icon from '../Icon/Icon'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import { useDropzone } from 'react-dropzone'

import './careercontactforminmodal.scss'
import { CustomToast } from '../../utils/helpers'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export const CareerContactFormInModal = ({ otherClasses, jobTitle }) => {
  const careerContactFormInModalClasses = clsx(
    otherClasses,
    'w-full contact_form_main_container max-w-[650px] lg:max-h-[800px] rounded-[20px] lg:px-[70px] p-8 lg:py-[30px] scroll-mt-[120px]'
  )

  const [state, setState] = useState({})
  const [isDisabled, setIsDisabled] = useState(false)
  const onDrop = useCallback((acceptedFiles) => {
    setState((state) => ({
      ...state,
      file: acceptedFiles[0],
    }))
  }, [])
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onClick: true,
    accept: {
      'application/pdf': [],
      'application/docs': [],
      'application/docx': [],
    },
  })

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    setState((state) => ({
      ...state,
      jobTitle,
    }))
  }, [jobTitle])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isDisabled === false) {
      const form = e.target
      if (!state?.file?.name) {
        CustomToast('Resume is Required')
      } else {
        try {
          setIsDisabled(true)
          const response = await fetch('/', {
            method: 'POST',
            body: encode({
              'form-name': form.getAttribute('name'),
              ...state,
              jobTitle,
            }),
          })
          const { status } = response
          if (status === 200) {
            CustomToast(
              'Thank you for for submission! We will get in touch with you shortly.'
            )
            setState({})
            form.reset()
          }
        } catch (error) {
          console.error(error)
        } finally {
          setIsDisabled(false)
        }
      }
    }
  }

  return (
    <div
      className={careerContactFormInModalClasses}
      data-testid="career-contact-form-in-modal"
    >
      <div className="flex flex-col items-center mb-4 mx-[30px] lg:mx-0 ">
        <span className="mx-auto flex items-center w-[78px] h-[78px] rounded-full justify-center contact_form_feature_icon mb-6">
          <Icon icon="job-form-icon" iconHeight={30} iconWidth={30} />
        </span>
        <Heading
          type="h6"
          otherClasses="font-satoshi font-bold text-xl  leading-[27.3px] text-center text-white mb-2"
        >
          Take Your Career to the Next Level with AngleBrackets
        </Heading>
        <p className="text-light_white font-normal font-satoshi text-base leading-6 text-center opacity-50">
          We are looking for talented and motivated individuals who are
          passionate about our company and its mission. If you are a team player
          who is eager to learn and grow, we encourage you to apply today.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        name="Career"
        method="post"
        action=""
        className="w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-2 mb-2">
          <input
            type="text"
            required
            name="fullName"
            onChange={handleChange}
            placeholder="Full Name"
            className="outline-0 h-12 w-full lg:w-2/4 rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
          />
          <input
            type="text"
            required
            name="jobTitle"
            onChange={handleChange}
            placeholder={jobTitle}
            disabled
            className="cursor-not-allowed outline-0 h-12 w-full lg:w-2/4 rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2 mb-2">
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Email Address"
            className="outline-0 w-full lg:w-2/4 h-12 rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
          />
          <input
            type="number"
            required
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
            className="outline-0 w-full lg:w-2/4 h-12 rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2 mb-2">
          <input
            id="file"
            name="file"
            type="file"
            style="display: none;"
            {...getInputProps()}
          />
          <div
            {...getRootProps()}
            className="flex items-center  w-full gap-2 truncate rounded-[10px] py-[12.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient "
          >
            <p className="text-sm  leading-[18.9px] text-white font-satoshi font-normal mx-0 my-0  careerform-input-button flex items-center">
              Upload Your Resume
            </p>
            <p>{state?.file?.name || 'No file selected'}</p>
          </div>
        </div>
        <textarea
          id=""
          cols="30"
          rows="10"
          required
          name="details"
          onChange={handleChange}
          placeholder="Cover Letter"
          className="outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal mb-4 placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
        />
        <div className="flex justify-center">
          <Button
            label="Submit Form"
            variant="primary"
            otherClasses={clsx(
              'w-[248px]',
              isDisabled && 'cursor-not-allowed bg-slate-500'
            )}
          />
        </div>
      </form>
    </div>
  )
}

export default CareerContactFormInModal
