import React from 'react'
import EVBike from './assets/Rectangle.png'

const Home = () => {
    
    return (
        <div id="home" className='w-full h-full flex flex-row justify-evenly items-center'>
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
            <div>
            <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="animatedMask">
      <rect width="100%" height="100%" fill="black" />
      
      <rect id="rect1" x="140" y="100" width="150" height="230" fill="white" rx="20" ry="20">
      <animate attributeName="height" values='230;150;230' dur="8s" keyTimes="0;0.5;1" begin="0s;rect2.end" fill="freeze" repeatCount="indefinite" />
      </rect>
      <rect id="rect2" x="140" y="340" width="150" height="160" fill="white" rx="20" ry="20">
        <animate attributeName="height" values='160;240;160' dur="8s" keyTimes="0;0.5;1" begin="0s;rect1.end" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values='340;260;340' dur="8s" keyTimes="0;0.5;1" begin="0s;rect1.end" fill="freeze"  repeatCount="indefinite"/>
      </rect>
      
      <rect id="rect3" x="300" y="100" width="150" height="150" fill="white" rx="20" ry="20">
        <animate attributeName="height" values='150;230;150' dur="8s" keyTimes="0;0.5;1" begin="0s;rect4.end" fill="freeze" repeatCount="indefinite" />
      </rect>
      <rect id="rect4" x="300" y="260" width="150" height="240" fill="white" rx="20" ry="20">
        <animate attributeName="height" values='240;160;240' dur="8s" keyTimes="0;0.5;1" begin="0s;rect3.end" fill="freeze" repeatCount="indefinite" />
        <animate attributeName="y" values='260;340;260' dur="8s" keyTimes="0;0.5;1" begin="0s;rect3.end" fill="freeze" repeatCount="indefinite" />
      </rect>
    </mask>
  </defs>

  <image href={EVBike} width="400" height="400" x = "100" y = "100" mask="url(#animatedMask)" />
</svg>
            </div>
        </div>
    )
}

export default Home
