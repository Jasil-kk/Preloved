import React from 'react'
import PhotoBox from '../../Components/styles-store/PhotoBox';

const PhotoUploader = () => {
  return (
    <div className='p-5 border-b border-blue-500'>
        <h2 className='text-2xl font-semibold text-slate-800 '>UPLOAD UPTO 10 PHOTOS</h2>
        <div className='w-96 mt-5 flex flex-wrap gap-5'>
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        <PhotoBox />
        </div>

    </div>
  )
}

export default PhotoUploader