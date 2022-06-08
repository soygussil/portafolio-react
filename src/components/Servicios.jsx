import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';


const Servicios = () => {
  return (
    <div name='servicios' className='w-full h-[90rem] md:h-[70rem] bg-[#042839] text-gray-300'>
        <div  className='max-w-[1000px]  mx-auto p-6 flex flex-col justify-center w-full h-full'>
             <div>
                  <p className='text-4xl font-bold inline border-b-4 border-[#FF6B6B] '>Servicios</p>
                  <p className='py-4'>// Puedo hacer lo siguiente</p>
             </div>
             <div data-aos="fade-up" className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4  text-center py-8'>
             <div className='shadow-md bg-slate-800 p-4 m-2 hover:scale-110 duration-500 '>
                    <p>Desarrollador Web</p>
                    <p className='flex justify-center text-[3rem] py-4'> <MdDesktopMac /></p>
                    <p>Puedo desarrollar un sitio web de acuerdo a tus necesidades, utilizando las últimas tecnologías, el desarrollo web moderno es lo máximo, hace que las páginas se vean fancys y bonitas 😊, aplicando mis conocimientos, podríamos obtener algo muy chido.</p>
             </div>   
             <div className='shadow-md bg-slate-800 p-4 m-2 hover:scale-110 duration-500 '>
                    <p>Diseñador UX/UI</p>
                    <p className='flex justify-center text-[3rem] py-4'> <MdCode /> </p>
                    <p>Estoy aún puliendo mis habilidades de diseñador, pero quizá pueda apoyarte en algo, el diseño moderno para mi es una de las cosas que pueden llegar a sobre salir sobre lo demás.</p>
             </div>   
             <div className='shadow-md bg-slate-800 p-4 m-2  hover:scale-110 duration-500 '>
                    <p>Desarrollador Software</p>
                    <p className='flex justify-center text-[3rem] py-4'> <MdPhonelinkSetup /> </p>
                    <p>He trabajado con algunas tecnologías, como Java, podría apoyarte a desarrollar algún software de acuerdo a tus necesidades.</p>
             </div>   
             </div>
        </div>
    </div>
  )
}

export default Servicios