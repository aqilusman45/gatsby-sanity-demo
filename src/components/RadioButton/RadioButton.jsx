import React from 'react'
import clsx from 'clsx'
import './radiobutton.scss'
export const RadioButton = ({ otherClasses, label, id, name }) => {
  const radioButtonClasses = clsx(
    otherClasses,
    'radio_button_main_container flex flex-row items-start gap-2'
  )

  return (
    <label
      htmlFor={id}
      className={radioButtonClasses}
      data-testid="radio-button"
    >
      <input type="radio" id={id} name={name} className="group" />
      <span />
      <p className=" text-sm font-normal text-light_white opacity-50 leading-[18.9px] font-satoshi ">
        {label}
      </p>
    </label>
  )
}

export default RadioButton
