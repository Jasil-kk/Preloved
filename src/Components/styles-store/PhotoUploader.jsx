import React from 'react'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const PhotoUploader = () => {
  return (
    <div className='p-5'>
        <h2 className='text-2xl font-semibold text-slate-800'>UPLOAD UPTO 10 PHOTOS</h2>
        <div className='w-14 h-14 flex justify-center items-center border border-slate-500'>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      </div>

    </div>
  )
}

export default PhotoUploader