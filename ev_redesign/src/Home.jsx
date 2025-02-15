import React from 'react'
import EVBike from './assets/Rectangle.png'

const Home = () => {
    
    return (
        <div id="home" className='w-full h-full flex flex-col sm:flex-row justify-between sm:justify-evenly items-center'>
            <div className='flex flex-col justify-between items-start'>
                <p className='font-raleway text-[64px]'>Meet</p>
                <h1 className='font-canela font-stretch-extra-expanded text-[79px]/[120px] font-[700]'>CarinamiEV</h1>
                <div className='w-[128px] h-[36px] flex flex-row justify-between items-center'>
                    <p className='font-raleway'>Scroll Down</p>
                    <a>
                        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="black" />
                            <path d="M18 29L9.65072 13.9713C8.91013 12.6382 9.87406 11 11.399 11H24.601C26.1259 11 27.0899 12.6382 26.3493 13.9713L18 29Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className='w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
  <defs>
    <mask id="animatedMask">
      <rect width="100%" height="100%" fill="black" />
      
      <rect id="rect1" x="23%" y="15%" width="25%" height="38%" fill="white" rx="20" ry="20">
        <animate attributeName="height" values="38%;26%;38%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect2.end" fill="freeze" repeatCount="indefinite" />
      </rect>
      <rect id="rect2" x="23%" y="55%" width="25%" height="30%" fill="white" rx="20" ry="20">
        <animate attributeName="height" values="30%;42%;30%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect1.end" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="55%;43%;55%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect1.end" fill="freeze" repeatCount="indefinite" />
      </rect>
      
      <rect id="rect3" x="50%" y="15%" width="25%" height="26%" fill="white" rx="20" ry="20">
        <animate attributeName="height" values="26%;40%;26%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect4.end" fill="freeze" repeatCount="indefinite" />
      </rect>
      <rect id="rect4" x="50%" y="43%" width="25%" height="42%" fill="white" rx="20" ry="20">
        <animate attributeName="height" values="42%;28%;42%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect3.end" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values="43%;57%;43%" dur="8s" keyTimes="0;0.5;1" begin="0s;rect3.end" fill="freeze" repeatCount="indefinite" />
      </rect>
    </mask>
  </defs>

  <image href={EVBike} width="70%" height="70%" x="15%" y="15%" mask="url(#animatedMask)" />
</svg>

            </div>
        </div>
    )
}

export default Home
