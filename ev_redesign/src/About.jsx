import React from 'react';
import EVBike2 from './assets/aboutImage.png';

const About = () => {
  return (
    <div id="about" className='w-full min-h-screen flex flex-col md:flex-row justify-between items-center p-4 md:p-8'>
      {/* SVG Section */}
      <div className='w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0'>
      <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
<defs>
  <mask id="animatedMask2">
    <rect width="100%" height="100%" fill="black" />
    
    <rect id="rect1" x="210" y="100" width="180" height="90" fill="white" rx="20" ry="20">
    <animate attributeName="width" values='180;180;180;180;180' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze" repeatCount="indefinite"  />
      <animate attributeName="x" values='210;210;210;210;210' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="y" values='100;100;100;100;100' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"  repeatCount="indefinite"/>
      <animate attributeName='height' values='90;90;90;90;90' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill='freeze' repeatCount="indefinite"/>
    </rect>
    <rect id="rect2" x="210" y="200" width="90" height="90" fill="white" rx="20" ry="20">
    <animate attributeName="width" values='90;90;90;90;90' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="x" values='210;210;210;210;210' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="y" values='200;200;200;200;200' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"  repeatCount="indefinite"/>
      <animate attributeName='height' values='90;90;190;190;290' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill='freeze' repeatCount="indefinite"/>
    </rect>
    
    <rect id="rect3" x="210" y="300" width="90" height="90" fill="white" rx="20" ry="20">
    <animate attributeName="width" values='90;90;90;180;90' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"  repeatCount="indefinite" />
      <animate attributeName="x" values='210;210;210;210;310' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="y" values='300;300;400;400;400' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"  repeatCount="indefinite"/>
      <animate attributeName='height' values='90;190;90;90;90' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill='freeze' repeatCount="indefinite"/>

    </rect>
    <rect id="rect4" x="210" y="400" width="180" height="90" fill="white" rx="20" ry="20">
      <animate attributeName="width" values='180;80;80;80;80;' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="x" values='210;310;310;310;310' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"   repeatCount="indefinite"/>
      <animate attributeName="y" values='400;400;200;200;200' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill="freeze"  repeatCount="indefinite"/>
      <animate attributeName='height' values='90;90;290;190;190' dur="7s" keyTimes="0;0.25;0.5;0.75;1" begin="0s" fill='freeze' repeatCount="indefinite"/>

    </rect>
  </mask>
</defs>

<image href={EVBike2} width="400" height="400" x = "100" y = "100" mask="url(#animatedMask2)" />
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


