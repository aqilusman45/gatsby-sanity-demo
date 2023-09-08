import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import './contactform.scss'
import Icon from '../Icon/Icon'
import Heading from '../Heading/Heading'
import { Listbox } from '@headlessui/react'
import Button from '../Button/Button'
import { graphql, useStaticQuery } from 'gatsby'
import { CustomToast } from '../../utils/helpers'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

export const ContactForm = ({ otherClasses }) => {
  const contactFormClasses = clsx(
    otherClasses,
    'mt-section_py_mob w-full contact_form_main_container rounded-[20px] lg:px-[200px] p-8 lg:py-[100px] scroll-mt-[120px]'
  )
  const {
    allSanityServicesPages: { nodes },
  } = useStaticQuery(graphql`
    {
      allSanityServicesPages(sort: { _createdAt: ASC }) {
        nodes {
          title
          _id
        }
      }
    }
  `)
  const industires = [{ _id: 1, title: 'Select Service' }, { ...nodes }]
  const [isDisabled, setIsDisabled] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState(industires[0])
  const [state, setState] = useState({})
  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isDisabled === false) {
      const { title } = selectedIndustry
      const form = e.target
      try {
        setIsDisabled(true)
        if (title === 'Select Service') {
          CustomToast('Service is Required')
        } else {
          await fetch('/', {
            method: 'POST',
            body: encode({
              'form-name': form.getAttribute('name'),
              ...state,
              service: title,
            }),
          })
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

  return (
    <div
      className={contactFormClasses}
      data-testid="contact-form"
      id="contact-us"
    >
      <div className="flex flex-col items-center mb-8">
        <span className="mx-auto flex items-center w-[78px] h-[78px] rounded-full justify-center contact_form_feature_icon mb-6">
          <Icon
            icon="contact-form-featured-icon"
            iconHeight={30}
            iconWidth={30}
          />
        </span>
        <Heading
          type="h6"
          otherClasses="font-satoshi font-bold text-lg  leading-[24.3px] text-center text-white mb-4"
        >
          Fill out the form and claim your complimentary consultation
        </Heading>
        <p className="text-light_white font-normal font-satoshi text-base leading-6 text-center opacity-50">
          Transform your ideas into reality with our cutting-edge web and mobile
          solutions. Partner with us and experience seamless digital
          transformation like never before.
        </p>
      </div>
      <form
        action=""
        className="w-full"
        method="post"
        onSubmit={handleSubmit}
        name="Contact Us"
      >
        <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
          <input
            type="text"
            required
            name="fullName"
            onChange={handleChange}
            placeholder="Full Name"
            className="outline-0 h-12 w-full lg:w-2/4 rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
          />
          <div className="relative z-10 w-full lg:w-2/4">
            <Listbox value={selectedIndustry} onChange={setSelectedIndustry}>
              <Listbox.Button className="flex text-left items-center h-12 justify-between w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal px-4 lg:px-[30px] contact_form_input_bg_gradient">
                {selectedIndustry.title}
                <Icon
                  icon="navbar-white-arrow-down"
                  iconHeight={24}
                  iconWidth={24}
                />
              </Listbox.Button>
              <Listbox.Options className="absolute bg-secondary_gray_300 left-0 top-14 w-full rounded-[20px]">
                {nodes.map((node) => (
                  <Listbox.Option
                    className="z-10   py-[8px] px-4 lg:px-[30px] text-sm leading-[18.9px] text-white font-satoshi font-normal "
                    key={node._id}
                    value={node}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? 'bg-primary_green text-secondary_gray_300'
                            : 'text-white'
                        }`}
                      >
                        {node.title}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-4 mb-4">
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="Corporate Email Address"
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
        <textarea
          id=""
          cols="30"
          rows="10"
          required
          size="60"
          name="details"
          onChange={handleChange}
          placeholder="Message Details"
          className="outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal mb-8 placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient"
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

export default ContactForm
