import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {HiIdentification} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import heroVid from '../assets/video.mp4';


const Home = () => {

  const {text} = useTypewriter({
    words: ['Bienvenido','Soy','Gustavo Silva'],
    loop: [3],
    typeSpeed:[35],
    delaySpeed:[1000]

  })

  return (
    <div name='home' className='w-full h-[1000px] sm:h-screen bg-[#041c3286]' >
       <video
        className='object-cover h-[80rem] sm:h-screen w-full absolute -z-10 blur-sm'
        src={heroVid}
        autoPlay
        loop
        muted
      />
        {/* container */}
        <div data-aos="fade-right" className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Info sobre mi */}
        <p className='text-[#FF6B6B] mt-[200px] sm:my-10 text-2xl sm:text-2xl font-bold'>Hola</p>
        <span   className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        {text}
        <Cursor />
        </span> 
        
        <h2 className='text-2xl sm:text-2xl font-bold text-[#FF6B6B]'>Frontend Developer | Computer Engineer</h2>
        {/* texto sobre mi */}
        <p className='text-[#aeafb3] p-4 max-w-[700px]'>Soy desarrollador web, con enfoque al frontend.
        Pasante de ingeniería en computación, aficionado al desarrollo web, he diseñado algunas páginas web de proyectos propios, tengo conocimientos en algunos lenguajes de programación, y de diseño, conocimientos en administración de windows, maquinas virtuales, y servidores, aficionado a la electrónica, sistemas embebidos e IoT. Me interesa el computo en la nube, y sus derivados. 
        Estoy en constante actualización y me gusta siempre aprender algo nuevo. </p>
        <div className='flex justify-evenly py-8'>
        <Link activeClass="active" to="work" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-900
          hover:border-[#1e3a8a] duration-200'>Mis trabajos 
              <span className='group-hover:rotate-180 duration-300'>
              <HiArrowNarrowRight className='ml-3'/> 
              </span>
          </button>
        </Link>
        <a target={'_blank'} rel="noreferrer" href="https://drive.google.com/file/d/122lUKtiyBJw3uvnEdGHSa6JS9RE_Twvz/view?usp=sharing">
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-900
          hover:border-[#1e3a8a] duration-200'>Mi CV 
              <span className='group-hover:rotate-45 duration-300'>
              <HiIdentification className='ml-3'/> 
              </span>
             
          </button>    
          </a>
        </div>
        </div>
    </div>
  )
}

export default Home