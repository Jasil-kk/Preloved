import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <div className='w-full h-full fixed'>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashLayout