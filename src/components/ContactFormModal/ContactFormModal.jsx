import React, { useEffect } from 'react'
import clsx from 'clsx'
import { hideBodyScroll, showBodyScroll } from '../../utils/helpers'
import Icon from '../Icon/Icon'
import CareerContactFormInModal from '../CareerContactFormInModal/CareerContactFormInModal'

export const ContactFormModal = ({
  otherClasses,
  show,
  handleClose,
  title,
}) => {
  const contactFormModalClasses = clsx(
    otherClasses,
    'flex justify-center fixed top-0 left-0 bottom-0 right-0 transition duration-300 bg-[#00000080] overflow-auto',
    show ? 'opacity-1 z-50 visible' : ' opacity-0 invisible'
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick, false)
    return () => {
      document.removeEventListener('keydown', handleEscapeClick, false)
    }
    // eslint-disable-next-line
  }, [])

  const handleEscapeClick = (event) => {
    if (event.keyCode === 27) handleClose()
  }

  if (show) {
    hideBodyScroll()
  } else {
    showBodyScroll()
  }

  return (
    <div className={contactFormModalClasses} data-testid="contact-form-modal">
      <button
        aria-label="button"
        className={
          'modal-overlay absolute left-0 top-0 bottom-0 right-0 z-[-1] cursor-auto w-full h-full'
        }
        onClick={() => handleClose()}
      />
      <div
        className={clsx(
          'modal-wrapper bg-secondary_gray_300 overflow-auto h-auto my-auto rounded-lg',
          otherClasses
        )}
      >
        <div className="max-w-[900px] mx-auto w-full">
          <button
            className="float-right px-5 py-5"
            onClick={() => handleClose()}
          >
            <Icon icon="cross-icon" iconHeight={24} iconWidth={24} />
          </button>
          <CareerContactFormInModal jobTitle={title} />
        </div>
      </div>
    </div>
  )
}

export default ContactFormModal
