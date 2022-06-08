import React from 'react'
import pastelChio from '../assets/pastelesChio.png'
import arreglosMaggie from '../assets/arreglosmaggie.png'
import tshirts from '../assets/tshirts.png'
import cafe from '../assets/cafeteria.png'
import meeti from '../assets/Meeti.png'
import electronica from '../assets/EElectronicas.png'
import hogari from '../assets/Hogari.png'
const Work = () => {
  return (
    <div name='work' className='w-full h-[150rem] md:h-[80rem] text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div className='pb-8'>
                 <p className='text-4xl font-bold inline text-gray-300 border-b-4 border-[#FF6B6B]'>Portfolio y Trabajos</p>
                <p className='py-6'>// Checa los últimos trabajos que he realizado.</p>
            </div>
            {/* Container */}  
            <div data-aos="fade-up" className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
            {/* objeto grid */}
            <div
            style={{ backgroundImage: `url(${hogari})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              {/* objeto grid */}
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Hogari</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio web de venta de bienes raíces.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
            </div>
            </div>


             {/* objeto grid */}
            <div
            style={{ backgroundImage: `url(${electronica})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>EE</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio de servicio técnico.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>
            {/* objeto grid */}
            <div
            style={{ backgroundImage: `url(${arreglosMaggie})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            
                {/* Hover Effects */}
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Arreglos Maggie</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio de arreglos para fiestas.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>
             {/* objeto grid */}
            <div
            style={{ backgroundImage: `url(${pastelChio})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Pastelería Chio</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio de pastelería.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>
               {/* objeto grid */}
            <div
            style={{ backgroundImage: `url(${tshirts})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Frontend Store</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio de venta de playeras.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>

                           {/* objeto grid */}
                           <div
            style={{ backgroundImage: `url(${meeti})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Meeti</p>
               <p className='text-center py-3 text-sm font-light'>Este es un sitio de reuniones.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>

               {/* objeto grid */}
               <div
            style={{ backgroundImage: `url(${cafe})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
               <p className='text-center'>Blog de Café</p>
               <p className='text-center py-3 text-sm font-light'>Este es un blog de cursos sobre café.</p>
              </span>
              <div className='pt-8 text-center'>
              {/* <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a> */}
                  </div>
                </div>
            </div>


            </div>

        </div>
    </div>
  )
}

export default Work