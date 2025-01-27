import React from 'react'

const ContactFormInput = ({...props}) => {
  return (
    <input type='text' className='w-[371px] h-[84px] border-2 border-solid border-black focus:border-3 focus:outline-none rounded-[32px] bg-white font-raleway text-[24px] text-black align-middle pl-[32px] ' {...props} />
  )
}

export default ContactFormInput
