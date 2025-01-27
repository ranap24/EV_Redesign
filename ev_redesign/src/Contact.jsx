import React from 'react'
import ContactFormInput from './ContactFormInput'

const Contact = () => {
  return (
    <div id="contact" className='min-w-screen min-h-screen py-[64px] px-[128px]'>
      <div className='font-raleway text-[48px]'>
        <h1>Meet us at <span className='font-bold'>sales</span>@<span className='font-bold'>franklinev.com</span></h1>
      </div>
      <div className='w-[435px] h-[478px] rounded-[32px] bg-[#FAFAFA] translate-x-[280px] mt-[32px]'>
        <form className='w-full h-full flex flex-col justify-evenly items-center'>
           <div>
            <ContactFormInput placeholder='Your Name'/>
            </div> 
            <div>
            <ContactFormInput placeholder='Your Email'/>
            </div> 
            <div>
            <ContactFormInput placeholder='Your Phone Number'/>
            </div> 
            <div>
                <button type = 'button' className='w-[371px] h-[84px] bg-black rounded-[32px] text-white text-[24px]'>Next</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
