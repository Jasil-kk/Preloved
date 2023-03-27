import React from 'react'

const PostNowBtn = ({onClick}) => {
  return (
    <div className='h-28 p-5 font-poppins flex items-center'>
        <button onClick={onClick} className='w-32 h-12 ml-5 bg-green-500 rounded-md text-slate-50 text-lg hover:bg-green-600'>POST NOW</button>
    </div>
  )
}

export default PostNowBtn