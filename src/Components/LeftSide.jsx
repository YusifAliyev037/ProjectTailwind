import React from 'react'
import MenuList from '../MenuList'
import MenuItem from './MenuItem'

 function LeftSide() {
  return (
    <div className=' bg-blue-100 border-r-2 p-2 border-blue-700 w-full lg:w-1/5' >
                <MenuList className=' flex-col'>
                    <MenuItem className='text-blue-800'> Topic 1</MenuItem>
                    <MenuItem className='text-blue-800'> Topic 2</MenuItem>
                    <MenuItem className='text-blue-800'> Topic 3</MenuItem>
                    <MenuItem className='text-blue-800'> Topic 4</MenuItem>
                    <MenuItem className='text-blue-800'> Topic 5</MenuItem>
                    <MenuItem className='text-blue-800'> Topic 6</MenuItem>
                </MenuList>
                </div>
  )
}

export default LeftSide
