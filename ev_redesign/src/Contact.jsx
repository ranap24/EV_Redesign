import React from 'react'
import ContactFormInput from './ContactFormInput'
import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const Contact = () => {
  const[submitted, setSubmitted] = useState(false);
  return (
    <div id="contact" className='w-full min-h-screen mt-[128px]'>
      <div className='font-raleway text-[42px]'>
        <h1>Meet us at <span className='font-bold'>sales</span>@<span className='font-bold'>franklinev.com</span></h1>
      </div>
     
      <motion.div className='w-[380px] h-[450px] rounded-[32px] bg-[#FAFAFA] translate-x-[280px] mt-[32px] flex flex-col items-center justify-evenly overflow-visible'>
      <AnimatePresence mode='wait'>
        {submitted ? 
        <motion.form className='w-full h-full flex flex-col justify-evenly items-start font-raleway' key='form2' initial = {{x : 100,opacity : 0}} animate = {{x : 0,opacity : 1}} exit = {{x : -100,opacity : 0}} transition={{duration : 0.5}}>
          <h1>How can we help?</h1>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>Web Design</label>
          </motion.div>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>App Design</label>
          </motion.div>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>Web Development</label>
          </motion.div>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>App Development</label>
          </motion.div>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>Web + App Development</label>
          </motion.div>
          <motion.div>
            <ContactFormInput type = "checkbox"/>
            <label>Web/App + Chatbot Development</label>
          </motion.div>
        </motion.form>
        : 
        <motion.form className='w-full h-full flex flex-col justify-evenly items-center' key="form1"  initial = {{x : 100,opacity : 0}} animate = {{x : 0,opacity : 1}} exit = {{x : -100,opacity : 0}} transition={{duration : 0.5}}>
           <motion.div>
            <ContactFormInput placeholder='Your Name' className='w-[320px] h-[70px] border-2 border-solid border-black focus:border-3 focus:outline-none rounded-[32px] bg-white font-raleway text-[24px] text-black align-middle pl-[32px] '/>
            </motion.div> 
            <motion.div>
            <ContactFormInput placeholder='Your Email' className='w-[320px] h-[70px] border-2 border-solid border-black focus:border-3 focus:outline-none rounded-[32px] bg-white font-raleway text-[24px] text-black align-middle pl-[32px] '/>
            </motion.div> 
            <motion.div>
            <ContactFormInput placeholder='Your Phone Number' className='w-[320px] h-[70px] border-2 border-solid border-black focus:border-3 focus:outline-none rounded-[32px] bg-white font-raleway text-[24px] text-black align-middle pl-[32px] '/>
            </motion.div> 
        </motion.form>}
        <div>
                <button type = 'button' className='w-[320px] h-[70px] bg-black rounded-[32px] text-white text-[24px]' onClick={()=>setSubmitted(!submitted)}>{submitted ? <motion.p initial = {{x : 100,opacity : 0}} animate = {{x : 0,opacity : 1}} exit={{x : -100,opacity : 0}} transition={{duration : 0.5}}>Submit</motion.p>:<motion.p initial = {{x : 100,opacity : 0}} animate = {{x : 0,opacity : 1}} exit={{x : -100,opacity : 0}} transition={{duration : 0.5}}>Next</motion.p>}</button>
         </div>
      </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Contact
