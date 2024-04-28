import React from 'react'

 function MenuItem({children, className, ...attr}) {
  return (
    <li {...attr} className={` ${className} text-base transition-all text-green-50 font-semibold hover:text-orange-300 cursor-pointer`}>
        {children}
        </li>

  )
}


export default MenuItem
