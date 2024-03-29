import React from 'react'

const AdCategory = (props) => {
  return (
    <div>
        <div className='w-full h-14 bg-slate-50 border-2 flex items-center pl-5 border-slate-500 text-lg text-slate-600 font-poppins hover:bg-slate-200'>{props.AdCategory}</div>
    </div>
  )
}

export default AdCategory