import React from 'react'
import { NavLink } from 'react-router-dom'
import autos from "../assets/Navabar2/autos.png"
import bikes from "../assets/Navabar2/bikes.png"
import electronics from "../assets/Navabar2/electronics.png"
import fashion from "../assets/Navabar2/fashion.png"
import furniture from "../assets/Navabar2/furniture.png"
import hobbies from "../assets/Navabar2/hobbies.png"
import jobs from "../assets/Navabar2/jobs.png"
import mobiles from "../assets/Navabar2/mobiles.png"
import pets from "../assets/Navabar2/pets.png"
import properties from "../assets/Navabar2/properties.png"
import services from "../assets/Navabar2/services.png"
import spareParts from "../assets/Navabar2/spareParts.png"


const NavBar2 = () => {
  return (
    <nav className='w-full h-auto pt-6 pl-5 bg-transparent font-outfit'>
      <h2 className='font-medium text-xl text-slate-800'>Preloved Categories</h2>
        <ul className='mt-6 w-full h-auto px-20 flex flex-wrap justify-between items-center slate-700 text-slate-900'>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={autos} alt="autos" />Autos</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={properties} alt="properties" />Properties</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={mobiles} alt="mobiles" />Mobiles</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={jobs} alt="jobs" />Jobs</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={bikes} alt="bikes" />Bikes</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={electronics} alt="electronics" />Electronics</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={spareParts} alt="spareParts" />Spare parts</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={furniture} alt="furniture" />Furniture</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={fashion} alt="fashion" />Fashion</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={hobbies} alt="hobbies" />Hobbies</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={pets} alt="pets" />Pets</NavLink>
            <NavLink className="font-normal text-base text-slate-600 flex flex-col items-center gap-2"> <img className='w-16 aspect-[3/2] object-contain' src={services} alt="services" />Services</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar2