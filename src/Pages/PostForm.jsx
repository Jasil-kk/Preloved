import React from 'react'
import Details from './Post Ad/Details'
import LocationAdder from './Post Ad/LocationAdder'
import PhotoUploader from './Post Ad/PhotoUploader'
import ReviewDetails from './Post Ad/ReviewDetails'
import SetPrice from './Post Ad/SetPrice'

const PostForm = () => {
  return (
    <div className='w-full h-auto bg-slate-200 flex flex-col items-center font-poppins'>
        <h1 className='text-3xl font-bold mt-20'>POST YOUR AD</h1>
        <div className='w-1/2 h-auto bg-slate-50 border border-blue-300'>
            <div className='border-b p-5 border-blue-500'>
            <h2 className='text-2xl font-semibold text-slate-800'>SELECTED CATEGORY</h2>
            <h6 className='text-lg text-slate-600 mt-2'>Cars/Car</h6>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold mt-5 ml-5'>INCLUDE SOME DETAILS</h1>
                <Details/>
                <SetPrice/>
                <PhotoUploader />
                <LocationAdder />
                <ReviewDetails />
            </div>
        </div>
    </div>
  )
}

export default PostForm