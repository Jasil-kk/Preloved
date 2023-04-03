import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <div className='w-full h-full'>
        <Header/>
        <div className='flex pt-20 pl-80'>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashLayout