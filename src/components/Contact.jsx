import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"


const Contact = () => {
    // form from web3pg just pasting here

    const [result, setResult] = React.useState("");
// we are linking this onsubmit with the form we created below
// adding API
// adding alert msgs manually
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bb1572c0-7d04-48bc-851a-f456357654e1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();

  // adding alert msgs manually we cleared setResult
      if (data.success) {
        setResult("");
        // alert("Form Submitted Successfully")
        toast.success("Form Submitted Successfully")

        event.target.reset();
      } else {
        console.log("Error", data);
        // alert(data.message)
        toast.error(data.message)
        setResult("");
      }
    };
  
// normal contact jsx file starts from here

  return (
  
           <motion.div
                   initial={{opacity:0 ,x:-200}}
                   transition={{duration: 1.5}}
                   whileInView={{opacity: 1,x:0}}
                   viewport={{once: true}}
           
           className='flex flex-col items-center justify-center conatiner mx-auto p-14 md:px-20 lg:px-3 w-full overflow-hidden' id = 'Contact'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2'> <span className='text-teal-300'>Contact</span>Us</h1>
                <p className='max-w-80 text-center mb-8'>Got a question? We're just one message away!</p>
                {/* form for conatct */}
                <form  onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-400 pt-8'>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 text-left'>Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required/>
                        </div>
                        <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required/>
                        </div>
                    </div>
                    <div className='my-6 text-left'>
                        Message
                        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder='Message' required></textarea>
                    </div>
                    <button className='  mx-auto flex items-center justify-center bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"} </button>
                </form>
    </motion.div>
  )
}

export default Contact