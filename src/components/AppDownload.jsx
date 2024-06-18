import React from 'react'
import {assets} from '../assets'

const AppDownload = () => {
  return (
    <section className='flex flex-col gap-5 items-center max-md:px-5
    max-md:gap-10' id='mobile'>
      <h1 className='text-[50px] text-center max-md:text-[25px]'>
        For Better Experience Download <br/>
        Foods App
      </h1>
      <div className='flex items-center justify-center gap-5
      max-md:flex-col'>
        <img src={assets.app_store} alt="app store"
        className='cursor-pointer hover:scale-105 duration-500' />
        <img src={assets.play_store} alt="play store"
        className='cursor-pointer hover:scale-105 duration-500' />
      </div>
    </section>
  )
}

export default AppDownload
