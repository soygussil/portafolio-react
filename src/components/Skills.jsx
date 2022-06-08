import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/Java.png';
import Bootstrap from '../assets/Bootstrap.svg';
import Python from '../assets/Python.png';
import Figma from '../assets/figma.png';
import Mysql from '../assets/Mysql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-[1280px] md:h-[screen] bg-[#064663] text-gray-300' >
        {/* Container */}
        <div  className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF6B6B] '>Skills</p>
                <p className='py-4'>// Estas son las tecnologías con las que he trabajado</p>
            </div>
            <div data-aos="fade-up" className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={HTML} alt="HTML icono" />
                        <p className='my-4'>HTML</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={CSS} alt="CSS icono" />
                        <p className='my-4'>CSS</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={JavaScript} alt="JavaScript icono" />
                        <p className='my-4'>JavaScript</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4' style={{width:'150px'}} src={Java} alt="Java icono" />
                        <p className='my-4'>Java</p>
                </div>     
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={ReactImg} alt="ReactImg icono" />
                        <p className='my-4'>React</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Node} alt="Node icono" />
                        <p className='my-4'>Node</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={GitHub} alt="GitHub icono" />
                        <p className='my-4'>GitHub</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Tailwind} alt="Tailwind icono" />
                        <p className='my-4'>Tailwind</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Bootstrap} style={{width:'110px'}} alt="Bootstrap icono" />
                        <p className='my-4'>Bootstrap</p>
                </div>   
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Figma} style={{width:'60px'}} alt="Figma icono" />
                        <p className='my-4'>Figma</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Python} style={{width:'100px'}} alt="Python icono" />
                        <p className='my-4'>Python</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto my-4 ' src={Mysql} style={{width:'200px'}} alt="Mysql icono" />
                        <p className='my-4'>Mysql</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Skills