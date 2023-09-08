import { COUNTRIES } from '../components/TestimonialCard/constants'
import React from 'react'

import ToastMessage from '../components/ToastMessage/ToastMessage'
import { toast } from 'react-toastify'

export const hideBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }
}

export const showBodyScroll = () => {
  if (typeof window !== 'undefined') {
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
  }
}

export const getCountryTitle = (countryCode) => {
  const { title: country } = COUNTRIES.find(
    (element) => element.value === countryCode
  )
  return country
}

export const CustomToast = (toastLabel) => {
  setTimeout(toast.dismiss(), 1000)
  return toast(<ToastMessage toastLabel={toastLabel} />, {
    position: 'bottom-center',
    hideProgressBar: true,
    closeButton: false,
  })
}
