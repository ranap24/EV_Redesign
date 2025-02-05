import React from 'react';
import EVBike2 from './assets/aboutImage.png';

const About = () => {
  return (
    <div id="about" className='w-full min-h-screen flex flex-col md:flex-row justify-between items-center p-4 md:p-8'>
      {/* SVG Section */}
      <div className='w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
  <defs>
    <mask id="animatedMask2">
      <rect width="100%" height="100%" fill="black" />
      
      <rect id="rect1" x="35%" y="15%" width="30%" height="15%" fill="white" rx="20" ry="20">
        <animate attributeName="width" values="30%;30%;30%;30%;30%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35%;35%;35%;35%;35%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="15%;15%;15%;15%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="15%;15%;15%;15%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>
      
      <rect id="rect2" x="35%" y="33%" width="15%" height="15%" fill="white" rx="20" ry="20">
        <animate attributeName="width" values="15%;15%;15%;15%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35%;35%;35%;35%;35%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="33%;33%;33%;33%;33%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="15%;15%;30%;30%;45%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>

      <rect id="rect3" x="35%" y="50%" width="15%" height="15%" fill="white" rx="20" ry="20">
        <animate attributeName="width" values="15%;15%;15%;30%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="x" values="35%;35%;35%;35%;45%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="50%;50%;60%;60%;60%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="height" values="15%;30%;15%;15%;15%" dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite" />
      </rect>

      <rect id="rect4" x="35%" y="67%" width="30%" height="15%" fill="white" rx="20" ry="20">
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
        <div className='font-raleway mb-8 md:mb-0'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Know us</h1>
          <p className='text-xl md:text-2xl lg:text-3xl mt-4'>To understand THE BEST</p>
        </div>
        <div className='flex flex-col max-w-md'>
          <span className='text-lg md:text-xl font-semibold'>At CarinamiEV,</span>
          <p className='text-base md:text-lg mt-2'>
            We are dedicated to revolutionising urban mobility with cutting-edge electric bikes that blend innovation, sustainability, and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


