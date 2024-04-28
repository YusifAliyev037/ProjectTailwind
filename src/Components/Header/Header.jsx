import React from 'react'
import MenuItem from '../MenuItem'
import MenuList from '../../MenuList'

 function Header() {
  return (
    <header className=' h-24 flex justify-between p-6 lg:bg-blue-800  md:bg-red-600 bg-slate-600 border-b-2 border-blue-950'>

        <h1 className=' text-green-100 text-3xl text-f'>Logo</h1>
        
        <MenuList>

            <MenuItem onClick={() => {}}>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>FAQ</MenuItem>
        </MenuList>

        <button className=' btn animate-pulse px-8 py-4 rounded transition-all active:bg-red-100 disabled:opacity-50 hover:bg-green -600 bg-white text-green-800 flex justify-center items-center text-base md:text-xl lg:text-3xl'>SignIn</button>
        </header>
  )
}

export default Header
