import React, { useRef } from 'react'
import Vehicle from './Vehicle';
import {useScroll, useTransform,motion } from 'framer-motion';

const Vehicles = () => {

    const divRef = useRef(0);
    const {scrollYProgress} = useScroll({target : divRef})
    const x = useTransform(scrollYProgress,[0,1],["400px","-100px"])
    const y = useTransform(scrollYProgress,[0,0.3],["100px","0px"])
    const vehicleArray = ["NIX-DIX","POWERPLUS","KORO","POWER PRO"];

  return (
    <div id="vehicles" className='h-[1400px] w-full relative' ref={divRef}>
        <div className='sticky top-0'>
        <motion.div className='font-raleway text-[42px]/[57px]' style={{y}}>
        <p>Meet</p>
        <h1 className='font-bold'>Our Vehicles</h1>
        </motion.div>
        <div className='w-full overflow-hidden'>
        <motion.div className='w-screen flex flex-col sm:flex-row flex-nowrap' initial = {{x : "400px"}} style = {{x}}>
          {vehicleArray.map((heading,index)=><Vehicle key={index} heading = {heading}/>)}
        </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Vehicles

