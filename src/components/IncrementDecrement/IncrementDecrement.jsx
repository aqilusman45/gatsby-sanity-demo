import React, { useState } from 'react'
import clsx from 'clsx'

export const IncrementDecrement = ({ otherClasses, label }) => {
  const incrementDecrementClasses = clsx(
    otherClasses,
    'flex justify-between flex-row-reverse sm:flex-row sm:justify-start items-center gap-2'
  )
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(count === 10 ? count : count + 1)
  }

  function handleDecrease() {
    setCount(count < 1 ? count : count - 1)
  }

  return (
    <div
      className={incrementDecrementClasses}
      data-testid="increment-decrement"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          className={clsx('', count < 0 ? '' : '')}
        >
          -
        </button>
        <p
          className={clsx(
            'text-sm font-normal font-satoshi leading-[18px]',
            count > 0 ? 'text-white' : 'text-white/50'
          )}
        >
          {count}
        </p>
        <button onClick={handleIncrease}>+</button>
      </div>
      <p className="text-sm leading-[18px] font-normal font-satoshi text-light_white/50">
        {label}
      </p>
    </div>
  )
}

export default IncrementDecrement
