import React from 'react'
import clsx from 'clsx'
import './checkbox.scss'
export const CheckBox = ({ otherClasses, label, id,isChecked }) => {
  const checkBoxClasses = clsx(
    otherClasses,
    'input_checkbox_container flex items-center gap-2 cursor-pointer'
  )
 
  return (
    <label htmlFor={id} className={checkBoxClasses} data-testid="check-box">
      <input type="checkbox" id={id} name="checkbox" className="group" checked={isChecked?isChecked:false} />
      {label && (
        <p className="text-sm font-normal font-satoshi text-[#808E95] group-checked:text-white ">
          {label}
        </p>
      )}
    </label>
  )
}

export default CheckBox
