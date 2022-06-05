import React from 'react'
import { BsFillLaptopFill } from "react-icons/bs";

const Servicios = () => {
  return (
    <div name='servicios' className='w-full h-screen bg-[#042839] text-gray-300'>
        <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div>
                  <p className='text-4xl font-bold inline border-b-4 border-[#FF6B6B] '>Servicios</p>
                  <p className='py-4'>// Puedo hacer lo siguiente</p>
             </div>
             <div data-aos="fade-up" className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <p>lol</p>
                    <p className='text-center'> <BsFillLaptopFill /> </p>
                    
             </div>   
             </div>
        </div>
    </div>
  )
}

export default Servicios