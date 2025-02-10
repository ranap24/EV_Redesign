import React,{useState,useRef} from 'react';
import EVBike2 from './assets/aboutImage.png';
import {useScroll} from 'framer-motion'


const About = () => {
  
  const [scrolled,setScrolled] = useState();
  const divRef = useRef(null);
  const {scrollY} = useScroll({target : divRef})

  return (
    <div id="about" className='w-full h-[200vh] relative'>
      {/* SVG Section */}
      <div className=' sticky top-0 w-full h-screen flex flex-col md:flex-row justify-start items-start p-4 md:p-8 '>
      <div className='w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 '>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
  <defs>
    <mask id="animatedMask2">
      <rect width="100%" height="100%" fill="black" />
      
      <rect id="rect1" x="35.5%" y="21%" width="29%" height="14%" fill="white" rx="12" ry="12">
        <animate attributeName="width" values="29%;29%;29%;29%;29%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35.5%;35.5%;35.5%;35.5%;35.5%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="21%;21%;21%;21%;21%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="14%;14%;14%;14%;14%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>
      
      <rect id="rect2" x="35.5%" y="36%" width="15%" height="14%" fill="white" rx="12" ry="12">
        <animate attributeName="width" values="15%;15%;15%;15%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35.5%;35.5%;35.5%;35.5%;35.5%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="36%;36%;36%;36%;36%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="14%;14%;30%;30%;45%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>

      <rect id="rect3" x="35.5%" y="51%" width="15%" height="14%" fill="white" rx="12" ry="12">
        <animate attributeName="width" values="15%;15%;15%;30%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35%;35%;35%;35%;45%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="51%;51%;61%;61%;61%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="14%;30%;14%;14%;14%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>

      <rect id="rect4" x="35.5%" y="66%" width="29%" height="14%" fill="white" rx="12" ry="12">
        <animate attributeName="width" values="30%;13%;13%;13%;13%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35%;52%;52%;52%;52%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="67%;67%;33%;33%;33%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="15%;15%;45%;30%;30%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>
    </mask>
  </defs>

  <image href={EVBike2} width="60%" height="60%" x="20%" y="20%" mask="url(#animatedMask2)" />
</svg>

      </div>

      {/* Text Section */}
      <div className='w-full md:w-1/2 h-auto md:h-[500px] flex flex-col justify-between items-center text-center md:text-left'>
        <div className='font-raleway mb-8 md:mb-0 flex-none'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Know us</h1>
          <p className='text-xl md:text-2xl lg:text-3xl mt-4'>To understand THE BEST</p>
        </div>
        <div className='flex flex-col max-w-md flex-1'>
        <svg width="84" height="63" viewBox="0 0 84 63" transform='scale(-1,-1)' fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 right-0'>
<path d="M45.2493 63L43.8052 60.365C52.7106 54.616 59.4499 45.7528 59.4499 38.5665C59.4499 32.5779 53.192 24.673 47.1748 19.1635V18.4449L71.0029 -3.8147e-06C78.4642 4.79087 84 13.4145 84 21.5589C84 38.5665 64.2636 55.8137 45.2493 63ZM1.44412 63L0 60.365C8.90544 54.616 15.8854 45.7528 15.8854 38.5665C15.8854 32.5779 9.38682 24.673 3.61031 19.1635V18.4449L27.1977 -3.8147e-06C34.659 4.79087 40.4355 13.4145 40.4355 21.5589C40.4355 38.5665 20.4585 55.8137 1.44412 63Z" fill="black"/>
</svg>
          <span className='text-lg md:text-xl font-semibold'>At CarinamiEV,</span>
          <p className='text-base md:text-lg mt-2'>
            We are dedicated to revolutionising urban mobility with cutting-edge electric bikes that blend innovation, sustainability, and performance.
          </p>
  

        </div>
      </div>
  
      </div>
       </div>
  );
};

export default About;


