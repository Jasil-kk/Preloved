import React from 'react'
import DescriptionAd from '../../Components/styles-store/DescriptionAd'
import FuelSelector from '../../Components/styles-store/FuelSelector'
import KMdriven from '../../Components/styles-store/KMdriven'
import Owners from '../../Components/styles-store/Owners'
import Selector from '../../Components/styles-store/selector'
import TitleAd from '../../Components/styles-store/TitleAd'
import Transmission from '../../Components/styles-store/Transmission'
import YearPicker from '../../Components/styles-store/YearPicker'

const Details = () => {
  return (
    <div className='p-5 border-b border-blue-500'>
        <Selector/>
        <YearPicker/>
        <FuelSelector/>
        <Transmission />
        <KMdriven />
        <Owners />
        <TitleAd/>
        <DescriptionAd />
    </div>
  )
}

export default Details