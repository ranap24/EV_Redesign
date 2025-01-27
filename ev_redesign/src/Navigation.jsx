import React from 'react'
import logo from './assets/LogoSample.png'

const Navigation = () => {
  return (
    <div className='font-raleway w-[715px] h-[64px] p-4 bg-navback blur-[400] border-navback-400 rounded-2xl text-xl flex flex-row justify-between items-center fixed bottom-16 left-1/4'>
      <a href="#Home" className='w-[108px] flex flex-row justify-between items-center'><img src={logo} alt = "carinami-logo" className='w-8 h-8'/><span>Home</span></a>
      <a href="#About">About</a>
      <a href="#Vechiles">Vechiles</a>
      <a href="#Contact">Contact</a>
    </div>
  )
}

export default Navigation
