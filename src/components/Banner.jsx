import React from 'react'
import {assets} from '../assets'

const Banner = () => {
  return (
    <>
    <div id='home'></div>
    <div className='relative max-md:h-[300px] max-md:rounded-full'>
      <img src={assets.header_img} alt="img err"
      className='w-full h-full object-cover ' />
      <div className='absolute left-[60px] max-lg:left-[30px] bottom-[10%] text-white 
      animation-fadeIn max-lg:bottom-[5%] max-sm:left-[5%] max-sm:overflow-hidden'>
        <h1 className='text-[80px] font-bold max-lg:text-[50px]
        leading-[100px] max-lg:leading-[60px] first-letter:uppercase
        max-md:text-[40px] max-md:leading-[40px]'>order your <br/> favourite food here</h1>
        <p className='w-[60%] text-justify text-[18px] max-lg:mt-5
        max-lg:text-[16px] max-lg:w-[80%] max-md:mt-3 max-sm:w-[95%] max-sm:text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ratione nihil reprehenderit nobis nisi, minus nemo quia molestiae sint corporis, 
            sapiente tempora ea quisquam! Voluptatem.</p>
        <button type='button'
        className='mt-[50px] text-gray-500 px-7 py-3 bg-white rounded-full
        capitalize max-lg:mt-[20px] max-md:px-3 max-md:py-1 max-md:text-[14px]'>view menu</button>
      </div>
    </div>
    </>
  )
}

export default Banner
