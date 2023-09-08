import React, { useState } from 'react'
import clsx from 'clsx'
import Heading from '../../components/Heading/Heading'
import Button from '../../components/Button/Button'
import Icon from '../../components/Icon/Icon'
import { CustomToast } from '../../utils/helpers'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

const INITIAL_STATE = {
  application: [{ android: false }, { ios: false }],
  website: [{ eCommerce: false }, { statistics: false }],
  payment_methods: [{ cash: false }, { online: false }, { google: false }],
}

export const LeadForm = ({ otherClasses }) => {
  const LeadFormClasses = clsx(
    otherClasses,
    'pt-[120px] pb-[40px]  bg-secondary_gray  px-4  lg:px-20  xl:px-[150px] mx-auto'
  )

  const [state, setState] = useState({...INITIAL_STATE})
  const [time, setTime] = useState(false)
  const [errorMessage, setErorMessage] = useState({})
  const handleChange = (e, name) => {
    if (Object.keys(errorMessage)?.length > 0) {
      setErorMessage({})
    }
    if (name) {
      setState((state) => {
        if (Array.isArray(state[name])) {
          const index = state[name].findIndex((node) =>
            Object.keys(node).includes(e.target.name)
          )
          if (index === -1) {
            return {
              ...state,
              [name]: [...state[name], { [e.target.name]: e.target?.checked }],
            }
          }
          state[name][index][e.target.name] = e.target?.checked
          return {
            ...state,
          }
        }
      })
    } else {
      setState((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    try {
      await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
          application: state?.application
            .map(
              (entry) =>
                `${Object.keys(entry)[0]} : ${Object.values(entry)[0]}\n`
            )
            .join(',\n'),
          website: state?.website
            .map(
              (entry) =>
                `${Object.keys(entry)[0]} : ${Object.values(entry)[0]}\n`
            )
            .join(',\n'),
          payment_methods: state?.payment_methods
            .map(
              (entry) =>
                `${Object.keys(entry)[0]} : ${Object.values(entry)[0]}\n`
            )
            .join(',\n'),
        }),
      })
      CustomToast(
        'Thank you for for submission! We will get in touch with you shortly.'
      )
      setState({...INITIAL_STATE})
      form.reset()
      // setState({});
      // setErorMessage({})
    } catch (error) {
      console.error(error)
    }
  }
  const handleError = () => {
    setTime(true)
    if (
      state.application &&
      !state.application[0]?.android &&
      state.application &&
      !state.application[1]?.ios
    ) {
      setErorMessage({ application: true })
      CustomToast('Please select at least one mobile app platform.')
    } else if (
      state.website &&
      !state.website[0]?.eCommerce &&
      state.website &&
      !state.website[1]?.statistics
    ) {
      setErorMessage({ website: true })
      CustomToast('Please select at least one website type.')
    } else if (!state.domain) {
      setErorMessage({ domain: true })
      CustomToast('Please select an option for domain')
    } else if (!state.server) {
      setErorMessage({ server: true })
      CustomToast('Please select an option for server')
    } else if (!state.grocery_management) {
      setErorMessage({ groceryManagement: true })
      CustomToast('Please fill out features for grocery management field')
    } else if (!state.inventory_management) {
      setErorMessage({ inventory: true })
      CustomToast('Please select an option for requirements')
    } else if (!state.pricing_strategies) {
      setErorMessage({ pricing_strategies: true })
      CustomToast('Please fill out price strategies field')
    } else if (
      state.payment_methods &&
      !state.payment_methods[0]?.cash &&
      state.payment_methods &&
      !state.payment_methods[1]?.online &&
      state.payment_methods &&
      !state.payment_methods[2]?.google
    ) {
      setErorMessage({ payment_methods: true })
      CustomToast('Please select at least one payment method')
    } else if (!state.point_of_sale) {
      setErorMessage({ point_of_sale: true })
      CustomToast('Please select an option for point of sale')
    } else if (!state.customer_functionalities) {
      setErorMessage({ customer_functionalities: true })
      CustomToast('Please fill out customer functionalities field')
    } else if (!state.multi_store) {
      setErorMessage({ multi_store: true })
      CustomToast('Please select an option for multi store support')
    } else if (!state.security_measures) {
      setErorMessage({ security_measures: true })
      CustomToast('Please select an option for specific security measurement')
    } else if (!state.technology_stack) {
      setErorMessage({ technology_stack: true })
      CustomToast('Please select an option for technology stack')
    } else if (!state.timeline) {
      setErorMessage({ timeline: true })
      CustomToast('Please fill out timeline field')
    } else if (!state.userExperience) {
      setErorMessage({ userExperience: true })
      CustomToast('Please fill out user experience field')
    } else if (!state.existingSystems) {
      setErorMessage({ existingSystems: true })
      CustomToast('Please select an option for existing systems')
    } else if (!state.futureGrowth) {
      setErorMessage({ futureGrowth: true })
      CustomToast('Please fill out future growth field')
    } else if (!state.benchmarks) {
      setErorMessage({ benchmarks: true })
      CustomToast('Please select an option for benchmarks')
    } else if (!state.wishToStart) {
      setErorMessage({ wishToStart: true })
      CustomToast('Please fill out wish to start field')
    } else if (!state.estimatedBudget) {
      setErorMessage({ estimatedBudget: true })
      CustomToast('Please fill out estimated budget field')
    } else if (!state.availabilityTime) {
      setErorMessage({ availabilityTime: true })
      CustomToast('Please fill out availability time field')
    } else if (!state.fullName) {
      setErorMessage({ fullName: true })
      CustomToast('Please fill out fullName field')
    } else if (!state.email) {
      setErorMessage({ email: true })
      CustomToast('Please fill out email field')
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        state?.email
      )
    ) {
      setErorMessage({ email: true })
      CustomToast('Email format not matched')
    } else if (!state.address) {
      setErorMessage({ address: true })
      CustomToast('Please fill out address field')
    } else if (!state.city) {
      setErorMessage({ city: true })
      CustomToast('Please fill out city field')
    } else if (!state.country) {
      setErorMessage({ country: true })
      CustomToast('Please fill out country field')
    } else if (!state.phone) {
      setErorMessage({ phone: true })
      CustomToast('Please fill out phone field')
    }
  }

  if (time) {
    setTimeout(() => {
      setErorMessage({})
      setTime(false)
    }, 3000)
  }

  return (
    <section className={LeadFormClasses} data-testid="test-form">
      <form
        method="post"
        onSubmit={handleSubmit}
        action=""
        name="lead form"
        className="flex flex-col xl:px-[150px] rounded-[20px] py-20   lg:px-[200px]   contact_form_main_container"
      >
        <div className="flex flex-col items-center mb-8 mx-4">
          <span className="mx-auto flex items-center w-[78px] h-[78px] rounded-full justify-center contact_form_feature_icon mb-6">
            <Icon
              icon="contact-form-featured-icon"
              iconHeight={40}
              iconWidth={40}
            />
          </span>
          <Heading
            type="h6"
            otherClasses="text-white font-bold font-satoshi mb-4 leading-[24px] text-lg"
          >
            Anglebracket Lead Form
          </Heading>
          <p className="text-light_white font-normal font-satoshi text-base leading-[24px] text-center opacity-50">
            Hi There! please fill below form to contact us
          </p>
        </div>

        <div className="flex flex-col gap-10 mt-10">
          <div className="grid gap-10 lg:gap-0 lg:grid-cols-2 mx-8 ">
            <div className="">
              <Heading
                type="h6"
                otherClasses={clsx(
                  'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                  errorMessage.application ? 'text-red-400' : ''
                )}
              >
                Application For
              </Heading>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="android"
                    onChange={(e) => handleChange(e, 'application')}
                    id="android"
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />
                  <label
                    htmlFor="android"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    Android
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="ios"
                    onChange={(e) => handleChange(e, 'application')}
                    id="iOS"
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />
                  <label
                    htmlFor="iOS"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    IOS
                  </label>
                </div>
              </div>
            </div>
            <div className="gap-10 lg:gap-0">
              <Heading
                type="h6"
                otherClasses={clsx(
                  'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                  errorMessage.website ? 'text-red-400' : ''
                )}
              >
                Website Type
              </Heading>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="eCommerce"
                    onChange={(e) => handleChange(e, 'website')}
                    id="eCommerce"
                    className="cursor-pointer w-4 h-4 accent-primary_green"
                  />
                  <label
                    htmlFor="eCommerce"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    E-commerce
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="statistics"
                    onChange={(e) => handleChange(e, 'website')}
                    id="statistics"
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />
                  <label
                    htmlFor="statistics"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    Statistics
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-10 lg:gap-0 lg:grid-cols-2 mx-8">
            <div>
              <Heading
                type="h6"
                otherClasses={clsx(
                  'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                  errorMessage.domain ? '!text-red-400' : ''
                )}
              >
                Do you have you own Domain ?
              </Heading>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="T_domain"
                    name="domain"
                    required={true}
                    onChange={handleChange}
                    value={true}
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />

                  <label
                    for="T_domain"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="N_domain"
                    onChange={handleChange}
                    required={true}
                    name="domain"
                    value={false}
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />

                  <label
                    for="N_domain"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="gap-10 lg:gap-0">
              <Heading
                type="h6"
                otherClasses={clsx(
                  'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                  errorMessage.server ? 'text-red-400' : ''
                )}
              >
                Do You have you Own Server ?
              </Heading>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="T_server"
                    name="server"
                    onChange={handleChange}
                    value={true}
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />

                  <label
                    for="T_server"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="N_server"
                    name="server"
                    onChange={handleChange}
                    value={false}
                    className="w-4 h-4 cursor-pointer accent-primary_green"
                  />

                  <label
                    for="N_server"
                    className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.groceryManagement ? 'text-red-400' : ''
              )}
            >
              What are the key features you want the Grocery Management System
              To have?
            </Heading>
            <textarea
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              required
              size="60"
              name="grocery_management"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.groceryManagement
                  ? 'border-red-400 border-[1px]'
                  : ''
              )}
            />
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.inventory ? 'text-red-400' : ''
              )}
            >
              Do you have any specific requirements for inventory Management and
              tracking ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T_inventory"
                  name="inventory_management"
                  onChange={handleChange}
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T_inventory"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="N_inventory"
                  name="inventory_management"
                  onChange={handleChange}
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="N_inventory"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.pricing_strategies ? 'text-red-400' : ''
              )}
            >
              How do you handle product pricing and discounts? Are there any
              unique pricing strategies you want to Implement?
            </Heading>
            <textarea
              id=""
              cols="30"
              rows="10"
              required
              size="60"
              onChange={handleChange}
              name="pricing_strategies"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.pricing_strategies
                  ? 'border-red-400 border-[1px]'
                  : ''
              )}
            />
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.payment_methods ? 'text-red-400' : ''
              )}
            >
              What payment methods do you plan to support for online orders ?
            </Heading>
            <div className=" lg:items-center lg:gap-10 lg:flex  ">
              <div className="flex lg:items-center lg:gap-2 gap-2 ">
                <input
                  type="checkbox"
                  name="cash"
                  onChange={(e) => handleChange(e, 'payment_methods')}
                  id="cash"
                  className="cursor-pointer w-4 h-4 accent-primary_green"
                />
                <label
                  htmlFor="cash"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Cash On Delivery
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="online"
                  onChange={(e) => handleChange(e, 'payment_methods')}
                  id="online"
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />
                <label
                  htmlFor="online"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Online Payment
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="google"
                  onChange={(e) => handleChange(e, 'payment_methods')}
                  id="google"
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />
                <label
                  htmlFor="google"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Google Pay
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.point_of_sale ? 'text-red-400' : ''
              )}
            >
              Are there any specifics integrations needed with other systems,
              such as accounting software or POS (point of sale) systems?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T_point_of_sale"
                  name="point_of_sale"
                  onChange={handleChange}
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T_point_of_sale"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F_point_of_sale"
                  name="point_of_sale"
                  value={false}
                  onChange={handleChange}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F_point_of_sale"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.customer_functionalities ? 'text-red-400' : ''
              )}
            >
              How do you currently manage customer data, and what
              customer-related functionalities do you want in the system? what
              Level of reporting and analytics do you require for
              sale,inventory, and customer insights ?
            </Heading>
            <textarea
              id=""
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="customer_functionalities"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.customer_functionalities
                  ? 'border-red-400 border-[1px]'
                  : ''
              )}
            />
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.multi_store ? 'text-red-400' : ''
              )}
            >
              Do you need multi-store support to manage multiple grocery
              locations ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T_multi-store"
                  name="multi_store"
                  onChange={handleChange}
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T_multi-store"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F_multi-store"
                  name="multi_store"
                  onChange={handleChange}
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F_multi-store"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.security_measures ? 'text-red-400' : ''
              )}
            >
              Are there any specific security measures or compliance
              requirements that the system should adhere to ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T-security-measures"
                  onChange={handleChange}
                  name="security_measures"
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T-security-measures"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F-security-measures"
                  name="security_measures"
                  onChange={handleChange}
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F-security-measures"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8 gap-10 lg:gap-0">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.technology_stack ? 'text-red-400' : ''
              )}
            >
              Do you have a preference for the technology stack (programming
              languages, frameworks,etc) used in the development of the system ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T-technology-stack"
                  onChange={handleChange}
                  name="technology_stack"
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T-technology-stack"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F-technology-stack"
                  onChange={handleChange}
                  name="technology_stack"
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F-technology-stack"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.timeline ? 'text-red-400' : ''
              )}
            >
              What is your expected timeline for the development of the grocery
              management system?
            </Heading>
            <textarea
              id="timeline"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="timeline"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.timeline ? 'border-[1px] border-red-400' : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.userExperience ? 'text-red-400' : ''
              )}
            >
              How do you envision the user interface and user experience of the
              system ?
            </Heading>
            <textarea
              id="userExperience"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="userExperience"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.userExperience ? 'border-[1px] border-red-400' : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.existingSystems ? 'text-red-400' : ''
              )}
            >
              Are there any Existing systems or solutions that you currently use
              and want to integrate with the new grocery management system ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T_existing-systems"
                  name="existingSystems"
                  onChange={handleChange}
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T_existing-systems"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F_existing-systems"
                  onChange={handleChange}
                  name="existingSystems"
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F_existing-systems"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.futureGrowth ? 'text-red-400' : ''
              )}
            >
              What level scalability do you anticipate for the system ,
              considering potential future growth?
            </Heading>
            <textarea
              id="future-growth"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="futureGrowth"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.futureGrowth ? 'border-[1px] border-red-400' : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.benchmarks ? 'text-red-400' : ''
              )}
            >
              Are there any specifics performance benchmarks or response time
              requirements for the system ?
            </Heading>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="T_benchmarks"
                  onChange={handleChange}
                  name="benchmarks"
                  value={true}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="T_benchmarks"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="F_benchmarks"
                  name="benchmarks"
                  onChange={handleChange}
                  value={false}
                  className="w-4 h-4 cursor-pointer accent-primary_green"
                />

                <label
                  for="F_benchmarks"
                  className="cursor-pointer text-[#FFFFFF] text-[13px] lg:text-[14px] font-satoshi leading-[1 8.9px] font-medium"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.wishToStart ? 'text-red-400' : ''
              )}
            >
              How soon you wish to start ?
            </Heading>
            <textarea
              id="wish-to-start"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="wishToStart"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.wishToStart ? 'border-[1px] border-red-400' : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.estimatedBudget ? 'text-red-400' : ''
              )}
            >
              Your Estimated Budget ?
            </Heading>
            <textarea
              id="estimated-budget"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="estimatedBudget"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.estimatedBudget
                  ? 'border-[1px] border-red-400'
                  : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.availabilityTime ? 'text-red-400' : ''
              )}
            >
              Please Share your Availability Time For The Meeting ?
            </Heading>
            <textarea
              id="availability-time"
              cols="30"
              rows="10"
              required
              onChange={handleChange}
              size="60"
              name="availabilityTime"
              placeholder="Your Answer"
              className={clsx(
                'outline-0 w-full max-h-[120px] min-h-[120px] rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient',
                errorMessage.availabilityTime
                  ? 'border-[1px] border-red-400'
                  : ''
              )}
            />
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.fullName ? 'text-red-400' : ''
              )}
            >
              Your Name
            </Heading>
            <div
              className={clsx(
                errorMessage.fullName
                  ? 'border-[1px] border-red-400  rounded-[10px]'
                  : ''
              )}
            >
              <input
                type="text"
                required
                onChange={handleChange}
                name="fullName"
                placeholder="Enter Your Name"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.email ? 'text-red-400' : ''
              )}
            >
              Email
            </Heading>
            <div
              className={clsx(
                errorMessage.email
                  ? 'border-[1px] border-red-400  rounded-[10px]'
                  : ''
              )}
            >
              <input
                type="email"
                required
                onChange={handleChange}
                name="email"
                value={state?.email || ''}
                placeholder="Enter Your Email"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.address ? 'text-red-400' : ''
              )}
            >
              Your Address
            </Heading>
            <div
              className={clsx(
                errorMessage.address
                  ? 'border-[1px] border-red-400  rounded-[10px]'
                  : ''
              )}
            >
              <input
                type="text"
                required
                onChange={handleChange}
                name="address"
                placeholder="Enter Your Address"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.city ? 'text-red-400' : ''
              )}
            >
              City
            </Heading>
            <div
              className={clsx(
                errorMessage.city
                  ? 'border-[1px] border-red-400  rounded-[10px]'
                  : ''
              )}
            >
              <input
                type="text"
                required
                onChange={handleChange}
                name="city"
                placeholder="Enter Your City Name"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.country ? 'text-red-400' : ''
              )}
            >
              Country
            </Heading>
            <div
              className={clsx(
                errorMessage.country
                  ? 'border-[1px] border-red-400  rounded-[10px]'
                  : ''
              )}
            >
              <input
                type="text"
                required
                onChange={handleChange}
                name="country"
                placeholder="Enter Your Country Name"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
          <div className="mx-8">
            <Heading
              type="h6"
              otherClasses={clsx(
                'text-white font-bold font-satoshi mb-4 leading-[24px] text-lg',
                errorMessage.phone ? 'text-red-400' : ''
              )}
            >
              Phone/Mobile
            </Heading>
            <div
              className={clsx(
                errorMessage.phone ? '!border-[1px] !border-red-400' : ''
              )}
            >
              <input
                type="number"
                required
                onChange={handleChange}
                name="phone"
                placeholder="Enter Phone/Mobile Number"
                className={clsx(
                  'outline-0 h-12 w-full rounded-[10px] py-[14.5px] text-sm leading-[18.9px] text-white font-satoshi font-normal placeholder:text-light_white placeholder:opacity-50 px-4 lg:px-[30px] contact_form_input_bg_gradient'
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 mx-8 ">
          <Button onClick={() => handleError()} label="SUBMIT" />
        </div>
      </form>
    </section>
  )
}

export default LeadForm
