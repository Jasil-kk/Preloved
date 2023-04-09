import React from 'react'
import banner from "../assets/AdSection/Banner.svg"

const AdSection = () => {
  return (
    <div className='w-full h-[196px] bg-transparent mt-[86px]'>
        <img className='w-full h-full' src={banner} alt="banner" />
    </div>
  )
}

export default AdSection