import React from 'react'
import clsx from 'clsx'
import 'react-toastify/dist/ReactToastify.css'
import Icon from '../Icon/Icon'

export const ToastMessage = ({ otherClasses, toastLabel }) => {
  const toastMessageClasses = clsx(
    otherClasses,
    'flex justify-between items-center gap-5 '
  )

  return (
    <div className={toastMessageClasses} data-testid="toast-message">
      <div className="flex items-center gap-2">
        <Icon icon="error-page-icon" iconHeight={40} iconWidth={40} />
        <p className="font-work-sans max-w-[270px] sm:max-w-none text-white font-normal text-base leading-6">
          {toastLabel}
        </p>
      </div>
    </div>
  )
}

export default ToastMessage
