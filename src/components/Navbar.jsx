import React,{useState} from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
// Esto hará que aparezca el menú de hamburguesa
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
    
  return (
    //   En esta parte podemos cambiar de color al navbar
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={Logo} alt="Logo de Imagen" style={{width:'150px'}}/>
            {/* <h1 className='font-bold'> Gus Dev/> </h1> */}
        </div>
        {/* Menu 
        hidden md:flex nos va ayudar a ocultar los enlaces de la navbar cuando haya un aumento de zoom o responsivo
        */}

        <ul className="hidden md:flex">
                <li className='hover:bg-red-400 hover:border-r-2 duration-300 '>
                <Link activeClass="active" to="home" smooth={true} duration={500}>
                Inicio
                </Link>
                </li>
                <li className='hover:bg-red-400 hover:border-r-2 duration-300 '>
                <Link activeClass="active" to="about" smooth={true} duration={500}>
                Acerca de mi
                </Link>
                </li>
                <li className='hover:bg-red-400 hover:border-r-2 duration-300 '>
                <Link activeClass="active" to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='hover:bg-red-400 hover:border-r-2 duration-300 '>
                <Link activeClass="active" to="work" smooth={true} duration={500}>
                Portafolio
                </Link>
                </li>
                <li className='hover:bg-red-400 hover:border-r-2 duration-300 '>
                <Link activeClass="active" to="contact" smooth={true} duration={500}>
                Contacto
                </Link>
                </li>
        </ul>


            {/* Hamburgesa */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {/* De nuevo, un operador ternario para cambiar los iconos de rayitas a X */}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Menu responsivo
            
            Llamamos por medio de una operación ternaria la función de nav, para poder hacer que funcione el menú de hamburguesa

            */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'>                
                <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                Inicio
                </Link></li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                Acerca de mi
                </Link>
                </li>
                <li className='py-6 text-4xl'>                
                <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>
                Portafolio
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                Contacto
                </Link>
                </li>
            </ul>
            {/* Iconos sociales */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="https://www.linkedin.com/in/gusilvagr/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="https://github.com/soygussil">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7B113A]'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="mailto:gussilv1995@gmail.com">
                        Correo <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#398AB9]'>
                    <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="mailto:gussilv1995@gmail.com">
                        Resumen <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
            </div>
    </div>
  )
}

export default Navbar