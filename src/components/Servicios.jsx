import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';


const Servicios = () => {
  return (
    <div name='servicios' className='w-full h-screen bg-[#042839] text-gray-300'>
        <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div>
                  <p className='text-4xl font-bold inline border-b-4 border-[#FF6B6B] '>Servicios</p>
                  <p className='py-4'>// Puedo hacer lo siguiente</p>
             </div>
             <div data-aos="fade-up" className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
             <div className='shadow-md  shadow-[#040c16] hover:scale-110 duration-500 '>
                    <p>Desarrollador Web</p>
                    <p className=''> <MdDesktopMac /></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam error voluptates laudantium animi accusantium ipsa rem eveniet provident totam, beatae doloremque illum facere alias autem esse, vero, delectus itaque!</p>
             </div>   
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <p>Diseñador UX/UI</p>
                    <p className='text-center'> <MdCode /> </p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi laborum velit eaque molestias praesentium libero quibusdam vel dicta ipsum autem fugiat nobis repellendus, vero omnis consequuntur quam hic sequi ipsa?</p>
             </div>   
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <p>Desarrollador Software</p>
                    <p className='text-center'> <MdPhonelinkSetup /> </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolore, neque quod ipsa voluptates exercitationem. Totam dolor sed obcaecati itaque quod ullam consequatur reprehenderit perferendis dolore ab, rem, doloremque dolorum.</p>
             </div>   
             </div>
        </div>
    </div>
  )
}

export default Servicios