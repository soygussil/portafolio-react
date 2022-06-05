import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-[#04293A] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FF6B6B]'>Acerca de mí</p>
                </div>
        <div>
            
        </div>
            </div>  {/* Otro div */}
                <div data-aos="fade-up" className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        {/* sobre mi  */}
                        <p>Hola Soy Gustavo, Mucho gusto, por favor puedes... Lorem, ipsum dolor sit amet.</p>
                     </div>
                     <div>
                         {/* Texto acerca de mi */}
                         <p>Me apasiona el desarrollo web.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora quos recusandae sint accusamus vero, cumque minima ipsum fugiat! Labore exercitationem officia quos reiciendis quo vero dignissimos optio tempora cum!</p>
                     </div>
                </div>
        </div>
    </div>
  )
}

export default About