import React from 'react'
import {MdOutlineArrowForwardIos } from 'react-icons/md'
const Ad = (props) => {
  return (
    <div>
        <button onClick={() => props.handleClick(props.id)}  className="w-full h-14 bg-blue-800 border-b-2 text-xl text-slate-50 text-left flex items-center font-poppins relative hover:bg-violet-600 active:bg-violet-700 focus:bg-violet-700"><span className="text-2xl mx-3">{props.icon}</span> {props.category} <span className="absolute right-1"><MdOutlineArrowForwardIos/></span></button>
    </div>
  )
}

export default Ad