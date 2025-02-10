import React, { useRef } from 'react'
import Vehicle from './Vehicle';
import {useScroll, useTransform,motion } from 'framer-motion';

const Vehicles = () => {

    const divRef = useRef(0);
    const {scrollYProgress} = useScroll({target : divRef})
    const x = useTransform(scrollYProgress,[0,1],["400px","-400px"])
    const y = useTransform(scrollYProgress,[0,0.3],["100px","0px"])
    const vehicleArray = ["NIX-DIX","POWERPLUS","KORO","POWER PRO"];

  return (
    <div id="vehicles" className='md:h-[1400px] h-[2800px]  w-full relative' ref={divRef}>
        <div className='sticky top-0'>
        <motion.div className='font-raleway text-[42px]/[57px]' style={{y}}>
        <p>Meet</p>
        <h1 className='font-bold'>Our Vehicles</h1>
        </motion.div>
        <div className='w-full overflow-x-auto'>
        <motion.div className='w-max flex flex-row translate-x-[400px]'  style = {{x}}>
          {vehicleArray.map((heading,index)=><Vehicle key={index} heading = {heading}/>)}
        </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Vehicles

