import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgb(13,27,32)] pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            {/* copied logo from navbar */}
            <div className='flex justify-start px-4 py-3 space-x-3'> 
                <div><i className='bx bxs-home-smile' style={{ color: '#81E6D9', fontSize: '30px' }}></i></div>
                <div className='text-3xl font-semibold  text-white flex justify-between items-center'>Real <span className='text-teal-300'> Estate</span></div>
            </div>
            <p className='text-gray-400 mt-4'>"Let’s stay connected! Have questions? We’re just a click away. Reach out today, we’re here to help!"</p>
            </div>
            {/* menu items */}
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'> Home </a>
                    <a href="#About" className='hover:text-white'> About Us </a>
                    <a href="#Contact" className='hover:text-white'> Conatact Us </a>
                    <a href="#" className='hover:text-white'> Privacy Policy </a>
                </ul>
            </div>
            {/* 3rd column */}
            <div className='w-full md:w-1/3'>
                 <h3 className='text-white text-lg font-bold mb-4'>Join Our Community</h3>
                 <p className='text-gray-400 mt-4 mb-4'>Don't miss out! Subscribe to our newsletter for the latest updates, tips, and exclusive offers</p>
                  <div className='flex gap-2'>
                    <input type="email" placeholder='Enter your Email here'
                    className='w-full p-2 rounded bg-slate-600 text-gray-200 border border-gray-500 focus:outline-none md:w-auto'/>
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                  </div>
            </div>
        </div>
        {/* copyright msg */}
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-300'>
            Copyright 2024 © RealEstate. All Rights are Reserved.
        </div>
    </div>
  )
}

export default Footer
