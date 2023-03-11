import React from 'react'
import DescriptionAd from '../../../Components/styles-store/DescriptionAd';
import KMdriven from '../../../Components/styles-store/KMdriven';
import Selector from '../../../Components/styles-store/selector'
import TitleAd from '../../../Components/styles-store/TitleAd';
import YearPicker from '../../../Components/styles-store/YearPicker';
import PostForm from '../../PostForm'

const MotorCycleDetails = () => {

    const Brands = [
        { label: "Hero Honda"},
        { label: "Bajaj"},
        { label: "Hero"},
        { label: "Honda"},
        { label: "KTM"},
        { label: "Royal Enfield"},
        { label: "Suzuki"},
        { label: "TVS"},
        { label: "Yamaha"},
        { label: "Other Brands"},
      ];

  return (
    <>
    <PostForm>
    <div className='p-5 border-b border-blue-500'>
        <Selector  brands={Brands} label={"Brand *"}/>
        <YearPicker/>
        <KMdriven/>
        <TitleAd/>
        <DescriptionAd/>
    </div>
    </PostForm>
    </>
  )
}

export default MotorCycleDetails