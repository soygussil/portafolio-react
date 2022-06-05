import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div class='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Info sobre mi */}
        <p className='text-[#FF6B6B]'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gustavo Silva</h1>
        <h2 className='txt-4xlsm:text-7xl font-bold text-[#aeafb3]'>Frontend Developer | Computer Engineer</h2>
        {/* texto sobre mi */}
        <p className='text-[#aeafb3] py-4 max-w-[700px]'>Soy desarrollador web, con enfoque al frontend.
        Pasante de ingeniería en computación, aficionado al desarrollo web, he diseñado algunas páginas web de proyectos propios, tengo conocimientos en algunos lenguajes de programación, y de diseño, conocimientos en administración de windows, maquinas virtuales, y servidores, aficionado a la electrónica, sistemas embebidos e IoT. Me interesa el computo en la nube, y sus derivados. 
        Estoy en constante actualización y me gusta siempre aprender algo nuevo. </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF6B6B] hover:border-[#FF6B6B] duration-200'>Más sobre mí 
            <span className='group-hover:rotate-180 duration-300'>
            <HiArrowNarrowRight className='ml-3'/> 
            </span>
            
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home