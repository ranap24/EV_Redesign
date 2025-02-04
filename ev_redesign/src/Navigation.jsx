import React from 'react';
import logo from './assets/LogoSample.png';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <div className='font-raleway w-7/8 sm:w-[550px] md:w-[715px] h-[42px] sm:h-[64px] p-4 bg-navback blur-[400] border-navback-400 rounded-xl sm:rounded-2xl text-sm sm:text-xl flex flex-row justify-between items-center fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10'>
      <a href="#home" className='w-[108px] flex flex-row justify-evenly items-center'>
        <motion.img 
          animate={{ rotate: 360, transition: { duration: 6, repeat: Infinity, ease: 'linear' } }} 
          src={logo} 
          alt="carinami-logo" 
          className='w-6 h-6 sm:w-8 sm:h-8 inline-block'
        />
        <span>Home</span>
      </a>
      <a href="#about" className='px-2 sm:p-0'>About</a>
      <a href="#vehicles" className='px-2 sm:p-0'>Vehicles</a>
      <a href="#contact" className='px-2 sm:p-0'>Contact</a>
    </div>
  );
};

export default Navigation;