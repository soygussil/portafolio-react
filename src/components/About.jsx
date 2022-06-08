import React from 'react'
import data from '../assets/Dev.json';
import Lottie from 'react-lottie'

const About = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

  return (
    <div  name='about' className='w-full h-[1280px] md:h-[screen] bg-[#04293A] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-2xl md:text-4xl  font-bold inline text-gray-300 border-b-4 border-[#FF6B6B]'>Acerca de mí</p>
                    
                </div>
        <div>
            
        </div>
            </div>  {/* Otro div */}
                <div data-aos="fade-up" className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-6 px-4'>
                    <div className='py-6 '>
                        {/* sobre mi  */}
                        <Lottie options={defaultOptions} height={350} width={300}/>
                     </div>
                     <div>
                         {/* Texto acerca de mi */}
                         <p className='sm:text-justify py-3 m-4'>
                            <span className='text-bold text-4xl text-red-400 '> ¡Hola! </span>
                            Me pueden decir Gus, soy ingeniero en computación, la estudie en la Universidad Autónoma de Guerrero, tengo 27 años, me desempeño en el desarrollo web, a mi me gusta mucho viajar, conocer lugares nuevos Me apasiona el desarrollo web, desde hace mucho tiempo me llamo la atención la tecnología, y que mejor manera de aprender a usarla.
                         </p>
                         <p className='sm:text-justify py-8 m-4'>
                        Actualmente me encuentro a punto de terminar el bootcamp de <span className='text-red-400 font-bold'> Generation México</span> el cual me brindo las herramientas para poder mejorar mis habilidades en el desarrollo web, yo no creí que llegará aprender tanto en tan poco tiempo. Bueno para no hacerla larga, a mí me gusta aprender cosas nuevas, estoy en constante actualización, y por ahora ando aprendiendo diversos frameworks para el desarrollo web. También estoy en un proyecto el cual es un sitio dedicado a la compraventa y renta en bienes raíces, el cual junto con un equipo de trabajo, hemos desarrollado diferentes habilidades, tanto como blandas, como tecnologícas. 
                         </p>
                     </div>
                </div>
        </div>
    </div>
  )
}

export default About