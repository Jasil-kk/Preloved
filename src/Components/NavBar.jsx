import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import LoginPage from './LoginPage';

const NavBar = () => {

const [showModal, setShowModal] = React.useState(false);

  return (
    <nav className='w-full bg-blue-500 h-32 sm:h-20 md:h-16 flex flex-wrap justify-around items-center'>
       <ul className='flex gap-5 sm:gap-10 md:gap-20 text-white text-lg'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Other</li>
        <li className='cursor-pointer'>Contact</li>
       </ul>
       <form action="" className='relative'>
        <FiSearch className='absolute top-2 left-2  text-2xl text-slate-400'/>
        <input type="search" placeholder='Search here...' className='w-80 h-10 rounded-lg pl-10 text-xl font-poppins outline-none'/>
       </form>
       <button onClick={() => setShowModal(true)} className='w-20 h-9 bg-orange-500 text-white rounded-xl text-md font-poppins tracking-wider hover:bg-orange-600'>LOGIN</button>
       {showModal ? 
       <LoginPage  setShowModal={setShowModal}/>: null
       }

    </nav>
  )
}

export default NavBar