import React from 'react'

const Transmission = () => {
  return (
    <div className='mt-8 font-poppins'>
        <h2 className='text-md text-slate-600'>Transmission *</h2>
        <div className='flex gap-3'>
        <button className='h-9 px-3 border border-slate-400 rounded-md hover:bg-blue-300 active:bg-blue-300 focus:bg-blue-300'>Automatic</button>
        <button className='h-9 px-3 border border-slate-400 rounded-md hover:bg-blue-300 active:bg-blue-300 focus:bg-blue-300'>Manual</button>
        </div>
    </div>
  )
}

export default Transmission