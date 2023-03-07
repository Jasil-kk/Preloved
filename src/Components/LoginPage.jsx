import React from 'react'
import { CgClose } from "react-icons/cg"

const LoginPage = ({setShowModal}) => {
  return (
    <>
    <div className='fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none'>
      <div className='w-96 h-auto bg-blue-600 m-5 rounded-lg'>
        <span onClick={() => setShowModal(false)} className=' text-3xl text-white cursor-pointer'><CgClose/></span>
        <form action="" className='w-full h-full flex flex-col p-4 gap-5 items-center'>
            <input type="text" className='w-full h-10 sm:h-12 text-xl pl-4 font-poppins outline-none'/>
            <input type="password" className='w-full h-10 sm:h-12 text-xl pl-4 font-poppins outline-none'/>
            <button type='submit' className='w-52 h-10 sm:h-12 bg-orange-600 rounded-lg text-xl text-white font-poppins'>Submit</button>
        </form>
      </div>
    </div>
 <div className="opacity-50 fixed inset-0 z-40 bg-black"></div></>
         
         
  )
}

export default LoginPage