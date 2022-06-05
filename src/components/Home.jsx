import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
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
    <div name='home' className='w-full h-screen bg-[#041c32aa]' >
       <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
        {/* container */}
        <div  data-aos="fade-right" class='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Info sobre mi */}
        <p className='text-[#FF6B6B] text-2xl sm:text-2xl font-bold'>Hola</p>
        <span  className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        {text}
        <Cursor />
        </span> 
        
        <h2 className='text-2xl sm:text-2xl font-bold text-[#aeafb3]'>Frontend Developer | Computer Engineer</h2>
        {/* texto sobre mi */}
        <p className='text-[#aeafb3] py-4 max-w-[700px]'>Soy desarrollador web, con enfoque al frontend.
        Pasante de ingeniería en computación, aficionado al desarrollo web, he diseñado algunas páginas web de proyectos propios, tengo conocimientos en algunos lenguajes de programación, y de diseño, conocimientos en administración de windows, maquinas virtuales, y servidores, aficionado a la electrónica, sistemas embebidos e IoT. Me interesa el computo en la nube, y sus derivados. 
        Estoy en constante actualización y me gusta siempre aprender algo nuevo. </p>
        <div>
        <Link activeClass="active" to="work" smooth={true} duration={500}>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF6B6B] hover:border-[#FF6B6B] duration-200'>Mis trabajos 
            <span className='group-hover:rotate-180 duration-300'>
            <HiArrowNarrowRight className='ml-3'/> 
            </span>
            </button>
              </Link>

        </div>
        </div>
    </div>
  )
}

export default Home