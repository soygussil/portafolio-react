import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/358f319d-16ad-4f95-b815-9becb286d781" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Puedes mandarme un mensaje a mi correo - <a href="mailto: gussilv1995@gmail.com">gussilv1995@gmail.com </a>
                O escribir tu comentario por acá.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Escribe tu mensaje'></textarea>
            <button className='text-white border-2 hover:bg-red-400 hover:border-red-400 duration-200 px-4 py-3 my-8 mx-auto flex items-center'>Enviar Mensaje</button>
        </form>
    </div>
  )
}

export default Contact