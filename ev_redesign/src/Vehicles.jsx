import React, { useRef } from 'react'
import Vehicle from './Vehicle';
import { transform, useScroll, useTransform,motion } from 'framer-motion';

const Vehicles = () => {

    const divRef = useRef(0);
    const {scrollYProgress} = useScroll({target : divRef})
    const x = useTransform(scrollYProgress,[0,1],["400px","-100px"])
    const vehicleArray = ["NIX-DIX","POWERPLUS","KORO","POWER PRO"];

  return (
    <div id="vehicles" className='h-[1400px] min-w-screen mt-[64px] p-[64px] relative' ref={divRef}>
        <div className='sticky top-0'>
        <div className='font-raleway text-[48px]/[57px]'>
        <p>Meet</p>
        <h1 className='font-bold'>Our Vehicles</h1>
        </div>
        <div className='w-full overflow-hidden'>
        <motion.div className='w-screen flex flex-row overflow-hidden' initial = {{x : "400px"}} style = {{x}}>
          {vehicleArray.map((heading,index)=><Vehicle key={index} heading = {heading}/>)}
        </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Vehicles

