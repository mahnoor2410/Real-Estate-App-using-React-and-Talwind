import React, { useState } from 'react';
import { assets } from '../assets/assets'

const Navbar = () => {
  // states

  const [showMobileMenu, setshowMobileMenu] = useState(false)



return (
  // ========================= LANDING PAGE ===========================
  
    <div className='absolute top-0 left-0 w-full z-10'>
<div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-30 lg:px-35 bg-transparent '>
    <div className='flex justify-start px-4 py-3 space-x-3'> 
      <div><i className='bx bxs-home-smile' style={{ color: '#81E6D9', fontSize: '30px' }}></i></div>
      <div className='text-3xl font-semibold  text-white flex justify-between items-center cursor-pointer'>Real <span className='text-teal-300'> Estate</span></div>
    </div>
    {/* <img src={assets.logo} alt="" /> */}
    {/* hm sth sth hi responsive b kr rhy hein */}
    {/* wese tw medium screens pe visible hoga but small screen pe hidden hogy tags */}
    <ul className='hidden md:flex gap-7 text-white'> 
        <a href="#Header" className='cursor-pointer hover:text-gray-900'>Home</a>
        <a href="#About" className='cursor-pointer hover:text-gray-900'>About</a>
        <a href="#Projects" className='cursor-pointer hover:text-gray-900'>Pojects</a>
        <a href="#Testimonials" className='cursor-pointer hover:text-gray-900'>Testimonials</a>
    </ul>
    <button className='hidden md:block bg-white md:px-8 py-2 rounded-full text-black'>Sign up</button>
      {/* icon that open the menu for smaller devices */}
   <img onClick={() => setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
</div>
      {/* mobile-menu */}
      <div
  className={`fixed inset-0 bg-white text-neutral-950 transition-all ${
    showMobileMenu ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'
  } overflow-hidden z-50`}>
  {/* Mobile Menu Content */}
         <div className='flex justify-end p-4 cursor-pointer'>
         <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} className='w-5' alt="" />
         </div>
        <ul className='flex flex-col items-center gap-2 mt-2 px-5 text-lg font-medium'>
        <a onClick={() => setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a onClick={() => setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
        <a onClick={() => setshowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
        <a onClick={() => setshowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar