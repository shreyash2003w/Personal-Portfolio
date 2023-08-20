import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";
const Navbar = () => {
  
   const [nav,setNav] = useState(false);



  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed  bg-black px-4'  >
        <div>
            <h1 className='text-3xl font-signature ml-2'>Shreyash</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '><Link to='Home' smooth duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '><Link to='About' smooth duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '><Link to='Portfolio' smooth duration={500}>Portfolio</Link></li>
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '><Link to='Experience' smooth duration={500}>Experience</Link></li>
            <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 '><Link to='Contact' smooth duration={500}>Contact</Link></li>
        </ul>

        <div  onClick={()=> setNav(!nav)}   className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
             {nav ?  <FaTimes size={30}/> : <FaBars size={30}/> }
           
        </div>
       
       {nav && (
          <ul className='flex flex-col justify-center text-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><Link onClick={()=>setNav(!nav)} to='Home' smooth duration={500}>Home</Link></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><Link onClick={()=>setNav(!nav)} to='About' smooth duration={500}>About</Link></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><Link onClick={()=>setNav(!nav)} to='Portfolio' smooth duration={500}>Portfolio</Link></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><Link onClick={()=>setNav(!nav)} to='Experience' smooth duration={500}>Experience</Link></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><Link onClick={()=>setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><a href="https://www.linkedin.com/in/shreyash-waghmare-bb4739258/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
          <li className='px-4 cursor-pointer capitalize py-6 text-3xl'><a href="https://github.com/shreyash2003w" target='_blank' rel='noreferrer'>GitHub</a></li>
          </ul>
        )}

        
    </div>
  )
}

export default Navbar