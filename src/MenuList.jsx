import React from 'react'

 function MenuList({children, className}) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
        {children}
    </ul>
  )
}

export default MenuList
