import React from 'react'
import logo from './assets/LogoSample.png'
import {motion} from 'framer-motion'

const Navigation = () => {
  return (
    <div className='font-raleway w-[715px] h-[64px] p-4 bg-navback blur-[400] border-navback-400 rounded-2xl text-xl flex flex-row justify-between items-center fixed bottom-4 left-1/4 z-10'>
      <a href="#home" className='w-[108px] flex flex-row justify-between items-center'><motion.img animate = {{rotate : 360,transition : {duration : 6,repeat : Infinity,ease : 'linear'}}} src={logo} alt = "carinami-logo" className='w-8 h-8 inline-block'/><span>Home</span></a>
      <a href="#about">About</a>
      <a href="#vehicles">Vehicles</a>
      <a href="#contact">Contact</a>
    </div>
  )
}

export default Navigation
