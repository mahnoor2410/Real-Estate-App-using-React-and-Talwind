import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0 ,x:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1,x:0}}
    viewport={{once: true}}
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='text-teal-300'>Testimonials</span></h1>
      <p className='max-w-80 text-center m-8 mx-auto'> Don't just take our word for it—hear what our satisfied clients have to say! </p>
            
            <div className='flex flex-wrap lg:flex-nowrap justify-center gap-8'>
                {testimonialsData.map((testimonial,index) => (
                    <div key={index} className='max-w-[340px] border rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src= {testimonial.image} alt={testimonial.alt} />
                           <h2 className='text-xl text-gray-300 font-medium'>{testimonial.name}</h2>
                           <p className='text-sm text-gray-400 mb-4'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 mt-2 mb-4'>
                            {Array.from({length: testimonial.rating} , (item,index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>  
                         <p className='text-gray-500'>{testimonial.text}</p>
                    </div>
                ))}
            </div>

    </motion.div> 
  )
}

export default Testimonials
 