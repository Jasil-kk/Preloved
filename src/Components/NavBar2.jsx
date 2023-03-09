import React from 'react'

const NavBar2 = () => {
  return (
    <nav className='w-full h-16 sm:h-12 bg-slate-50 flex justify-center items-center border-b border-blue-100'>
        <ul className='w-auto h-full flex flex-wrap justify-between items-center slate-700 px-11 text-slate-900'>
            <li className='cursor-pointer mx-4 sm:mx-6 md:mx-11'>item1</li>
            <li className='cursor-pointer mx-4 sm:mx-6 md:mx-11'>item2</li>
            <li className='cursor-pointer mx-4 sm:mx-6 md:mx-11'>item3</li>
            <li className='cursor-pointer mx-4 sm:mx-6 md:mx-11'>item4</li>
            <li className='cursor-pointer mx-4 sm:mx-6 md:mx-11'>item5</li>
        </ul>
    </nav>
  )
}

export default NavBar2