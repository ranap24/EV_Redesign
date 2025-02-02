import React from 'react'

const Vehicle = ({ heading }) => {
    return (
        <div className='w-[280px] h-[400px] ml-[8px] p-[8px] border border-solid border-black rounded-[32px] shadow-custom inset-shadow-[#000040] relative'>
            <div className='absolute top-[32px] left-[32px]'>
                <h1 className='font-raleway text-[32px]'>{heading}</h1>
            </div>
            <div className='absolute bottom-[16px] right-[16px]'>
                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="34" r="34" fill="#1E1E1E" />
                    <path d="M44.089 21.4615C45.5761 21.063 46.9369 22.4238 46.5385 23.911L39.8141 49.0065C39.4157 50.4936 37.5567 50.9917 36.4681 49.903L18.0969 31.5319C17.0082 30.4432 17.5063 28.5843 18.9935 28.1858L44.089 21.4615Z" fill="white" />
                </svg>

            </div>
        </div>
    )
}

export default Vehicle

