import React from 'react'
import Details from '../Pages/Post Ad/Details'
import SetPrice from '../Pages/Post Ad/SetPrice'

const PostForm = () => {
  return (
    <div className='w-full h-auto bg-slate-50 flex flex-col items-center font-poppins'>
        <h1 className='text-3xl font-bold mt-20'>POST YOUR AD</h1>
        <div className='w-1/2 h-auto bg-slate-100 border border-blue-300'>
            <div className='border-b p-5 border-blue-500'>
            <h2 className='text-2xl font-semibold text-slate-800'>SELECTED CATEGORY</h2>
            <h6 className='text-lg text-slate-600 mt-2'>Cars/Car</h6>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold mt-5 ml-5'>INCLUDE SOME DETAILS</h1>
                <Details/>
                <SetPrice/>
            </div>
        </div>
    </div>
  )
}

export default PostForm