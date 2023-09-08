import React from 'react'
import clsx from 'clsx'
import CountUp from 'react-countup'
import { Link } from 'gatsby'

export const Stats = ({
  otherClasses,
  index,
  count,
  labels,
  entered,
  slug: { current = '' } = {}
  
}) => {
  const statsClasses = clsx(otherClasses, 'flex flex-col items-center gap-2')


  return (
    <div className={statsClasses} data-testid="stats">
      {!entered ? (
        <p className="font-bold text-primary_green font-satoshi text-xl leading-[27px] lg:text-2xl lg:leading-[32.24px] text-center">
          0
        </p>
      ) : (
        <CountUp
          className="font-bold text-primary_green font-satoshi text-xl leading-[27px] lg:text-2xl lg:leading-[32.24px] text-center"
          start={0}
          end={count}
          duration={2}
          delay={0}
        />
      )}
      <Link to={`/${current}`}  key={index} >
        <p className=" flex items-center hover:text-primary_green_light gap-1 cursor-pointer text-[18px] leading-[16.2px] text-center font-satoshi font-normal text-white">
          {labels}
        </p>
      </Link>
    </div>
  )
}

export default Stats
