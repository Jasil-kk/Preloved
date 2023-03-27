import React from 'react'
import {MdOutlineArrowForwardIos } from 'react-icons/md'
const Ad = ({onClick,category,icon,}) => {
  return (
    <div>
        <button key={category} onClick={onClick}  className="w-full h-14 bg-blue-800 border-b-2 text-xl text-slate-50 text-left flex items-center font-poppins relative hover:bg-violet-600 active:bg-violet-700 focus:bg-violet-700"><span className="text-2xl mx-3">{icon}</span> {category} <span className="absolute right-1"><MdOutlineArrowForwardIos/></span></button>
    </div>
  )
}

export default Ad