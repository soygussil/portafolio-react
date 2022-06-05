import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
             <div className='pb-8'>
                 <p className='text-4xl font-bold inline text-gray-300 border-b-4 border-[#FF6B6B]'>Portfolio y Trabajos</p>
                <p className='py-6'>// Checa los últimos trabajos que he realizado.</p>
            </div>
            {/* Container */}  
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* objeto grid */}
               <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
               {/* objeto grid */}
              <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
                              {/* objeto grid */}
                              <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
               {/* objeto grid */}
              <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
                              {/* objeto grid */}
                              <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
               {/* objeto grid */}
              <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
                {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold  text-white tracking-wider'>
                Landing Page
              </span>
              <div className='pt-8 text-center'>
              <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
                  </div>
                </div>
              </div>
              
            </div>

        </div>
    </div>
  )
}

export default Work