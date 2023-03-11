import React from 'react'
import DescriptionAd from '../../../Components/styles-store/DescriptionAd'
import TitleAd from '../../../Components/styles-store/TitleAd'
import PostForm from '../../PostForm'

const TVsVideoAudio = () => {
  return (
    <><PostForm>
    <div className='p-5 border-b border-blue-500'>
    <TitleAd/>
        <DescriptionAd />
    </div>
    </PostForm></>
  )
}

export default TVsVideoAudio