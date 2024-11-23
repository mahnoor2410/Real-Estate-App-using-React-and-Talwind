import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion"


const Projects = () => {

    // state variables
    const [currentIndex, setcurrentIndex] = useState(0)
    const [cardsToShow, setcardsToShow] = useState(1) 

    // functions
    const nextProject =  ()=>{
        setcurrentIndex((prevIndex) => (prevIndex+1) % projectsData.length)
    }
    const prevProject =  ()=>{
        setcurrentIndex((prevIndex) => (prevIndex === 0) ? projectsData.length - 1 : prevIndex-1)
    }

    // useEffect hook
    useEffect(() => {
        const upadteCardsToShow = () => {
            if(window.innerWidth >= 1024){
                setcardsToShow(projectsData.length);
            }else{
                setcardsToShow(1)
            }
        };
            upadteCardsToShow();
            window.addEventListener('resize' ,upadteCardsToShow );
            return () => window.removeEventListener('resize' ,upadteCardsToShow );
    },[]);
 
  return (
       

    <motion.div
    initial={{opacity:0 ,x:-200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1,x:0}}
    viewport={{once: true}}
    
    className='container bg-[rgb(6,24,31)] mx-auto py-4 pt-5 px-6 my-20 md:px-20 lg:px-32 w-full overflow-hidden' id = 'Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='text-teal-300'>Completed</span></h1>
        <p className= 'max-w-md mx-auto text-center mt-8 mb-8'>With a track record of successfully completing numerous projects, we consistently deliver quality and exceed client expectations</p>
                {/* slider buttons */}
         <div className='flex justify-end items-center mb-8'>
             <button onClick={prevProject}
             className='p-3 bg-gray-200 rounded mr-2' aria-label = 'Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
             </button>
             <button  onClick={nextProject}
             className='p-3 bg-gray-200 rounded mr-2' aria-label = 'Next Project'>
                <img src={assets.right_arrow} alt="Next" />
             </button>
         </div>
                 {/* Projects cards for slider */}

                 <div className='overflow-hidden'>
                    <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style = {{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
                    >  
                        {/* Conditional Redndering ===== map se hm array ki all imgs ko aik hi line se display krwa rhy */}
                        
                        {projectsData.map((project,index) => (
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'> 
                                <img src={project.image} alt={project.title} className='rounded w-full h-auto mb-14'/> 
                                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                        <div className='inline-block bg-white w-auto px-4 py-2  rounded shadow-md'>
                                           <h2 className='text-lg font-semibold text-gray-800'>{project.title}</h2>
                                           <p className='text-gray-500 text-sm'>{project.price} <span>|</span> {project.location}</p>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                 </div>
    </motion.div>
  )
}

export default Projects