import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryApi } from '../../../Store/GetCategorySlice';

const Dashboard = () => {

  const {allCategory} = useSelector((state)=> state.allCategory)

  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getCategoryApi())
},[dispatch])

const categorys = allCategory?.category
console.log(categorys);

  return (
    <div className='w-full min-h-screen bg-slate-300 flex items-center flex-col font-poppins'>
      <h1 className='mt-5 text-4xl font-extrabold'>Admin Dashboard</h1>
      <div className='w-1/2 h-auto bg-slate-50 mt-8 flex flex-col items-center rounded-md'>
          <h2 className='text-3xl mt-5 font-bold'>Categories</h2>
          <div className='mt-5 w-[70%] flex flex-col items-center'>
            {categorys?.map((category)=>(
          <div className='w-full mb-5 h-14 p-3 border border-slate-400 flex items-center justify-between'>
            <h3 className='text-xl text-slate-800'>{category?.categoryName}</h3>
            <button className='w-auto p-4 h-6 flex items-center rounded-xl bg-blue-500 text-slate-50 transform transition duration-500 ease-in-out hover:bg-blue-700'>view</button>
          </div>
          ))}
          <button className='mb-5 w-1/2 h-12 text-lg text-blue-500 border border-blue-500 transform transition duration-500 ease-in-out hover:bg-blue-500  hover:text-slate-50 rounded-lg'>Create New Category</button>
          </div>
      </div>
    </div>
  )
}

export default Dashboard