import React from 'react'

const AdCategory = (props) => {
  return (
    <div>
        <div className='w-96 h-12 bg-slate-50 border-2 flex items-center pl-5 border-slate-500 text-lg text-slate-600 font-poppins'>{props.AdCategory}</div>
    </div>
  )
}

export default AdCategory