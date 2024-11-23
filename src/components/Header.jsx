import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    // ======================== LANDING PAGE ===========================

// picture adjust

<div className="min-h-screen mb-0 bg-cover bg-center flex items-center w-full overflow-hidden relative" style={{ backgroundImage: "url('head.jpg.webp')" }} id="Header">
  {/* Black Overlay with opacity */}
  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black" style={{ opacity: 0.6 }}></div>

<Navbar/>

    <motion.div 
     initial={{opacity:0 ,y:100}}
     transition={{duration: 1.5}}
     whileInView={{opacity: 1,y:0}}
     viewport={{once: true}}

    className="container relative z-0 text-center mx-auto py-4 px-6 sm:px-10 md:px-25 lg:px-32 text-white">
        <h2 className='text-5xl sm:text-6xl md:text-[65px] inline-block max-w-3xl font-semibold pt-20'>Discover <span className='text-teal-500'>homes</span> that match your style and needs</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded transition-all duration-200 hover:border-2'>Projects</a>
            <a href="#Contact" className='bg-sky-700 px-8 py-3 rounded transition-all duration-300 hover:bg-sky-900'>Conatct Us</a>
        </div>
    </motion.div>
  </div>
  )
}

export default Header
