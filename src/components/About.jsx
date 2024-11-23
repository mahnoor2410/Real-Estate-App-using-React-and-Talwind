// mount this component in app.jsx file

import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"


const About = () => {
  return (
   <motion.div 
        initial={{opacity:0 ,x:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1,x:0}}
        viewport={{once: true}}
   className='flex flex-col items-center justify-center conatiner mx-auto p-14 md:px-20 lg:px-3 w-full overflow-hidden' id = 'About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'> About <span className='text-teal-300'>Our Brand</span></h1>
      <p className='max-w-80 text-center mb-8'>Your Vision, Our Commitment in Real Estate</p>
      
    <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
    <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 md:w-1/2 max-w-lg'/>
       <div className='flex flex-col items-center md:items-start mt-10 text-slate-300'>
           
           <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center'>
                   <div>
                      <p className='text-4xl font-medium text-teal-300'> 5+ </p>
                      <p> Years Of Excellence </p>
                   </div>
                   <div>
                      <p className='text-4xl font-medium text-teal-300'> 8+ </p>
                      <p> Projects Completed </p>
                   </div>
                   <div>
                      <p className='text-4xl font-medium text-teal-300'> 10+ </p>
                      <p> Mn. Sq. Ft. Delivered </p>
                   </div>
                   <div>
                      <p className='text-4xl font-medium text-teal-300'> 11+ </p>
                      <p> Ongoing Projects </p>
                   </div>
           </div>
               <p className='my-10 max-w-lg mx-4'>We are driven by a deep passion for real estate and a commitment to bringing your property vision to life. With expertise and dedication, we focus on finding solutions tailored to your unique needs. Whether you're buying, selling, or investing, we make your goals our priority. Let us turn your real estate dreams into reality with unwavering support and precision.</p> 
                <button className='  mx-auto flex items-center justify-center bg-blue-600 text-white px-8 py-2 rounded'>See More!</button>
        </div>
    </div>
  </motion.div>
  )
}

export default About
