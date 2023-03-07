import React from 'react'
import { CiSearch } from "react-icons/ci"

const NavBar = () => {
  return (
    <nav className='w-full bg-blue-500 h-20 sm:h-16 flex flex-wrap justify-around items-center'>
       <ul className='flex gap-5 sm:gap-10 md:gap-20 text-white'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Other</li>
        <li className='cursor-pointer'>Contact</li>
       </ul>
       <form action="" className='relative'>
        <CiSearch className='absolute top-1.5 left-1.5 text-2xl text-slate-400'/>
        <input type="search" placeholder='Search here...' className='w-72 h-9 rounded-lg pl-8'/>
       </form>
    </nav>
  )
}

export default NavBar