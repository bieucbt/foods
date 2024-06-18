import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' bg-black flex justify-center m-auto' id='contact'>
        <div className='max-w-[1280px] p-10 grid grid-cols-4 text-gray-400 gap-5
        max-md:flex max-md:flex-col'>
            <div className='col-span-2 flex flex-col gap-5'>
                <h2 className='text-[40px] font-bold text-orange-600'>Foods.</h2>
                <p className=' '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Tenetur nihil quo ipsum facilis dolorem quasi distinctio ab minima omnis quos, 
                    ut quod veritatis modi officia suscipit reprehenderit adipisci quaerat odit ex 
                    veniam voluptatum itaque! Placeat sit tempore labore rem nihil?</p>
                <nav className='flex items-center gap-2'>
                    <div className='p-2 rounded-full border border-white
                    cursor-pointer'>
                        <FaFacebook size={25} color='white' />
                    </div>
                    <div className='p-2 rounded-full border border-white
                    cursor-pointer'>
                        <FaTwitter size={25} color='white' />
                    </div>
                    <div className='p-2 rounded-full border border-white
                    cursor-pointer'>
                        <FaLinkedin size={25} color='white' />
                    </div>
                </nav>
            </div>

            <div className='flex flex-col gap-3 pt-5'>
                <h2 className='text-[22px] text-white font-bold uppercase'>company</h2>
                <nav>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>about us</li>
                        <li className='cursor-pointer'>delivery</li>
                        <li className='cursor-pointer'>privacy police</li>
                    </ul>
                </nav>
            </div>

            <div className='flex flex-col gap-3 pt-5'>
                <h2 className='text-[22px] text-white font-bold uppercase'>get in touch</h2>
                <p>+84 929 999 999</p>
                <p>contact@foods.com</p>
            </div>
            <div className='col-span-4 mt-5'>
                <hr className='text-gray-400' />
                <p className='text-center mt-5'>copyright 2024 © Foods@contact.com - All Right Reserved</p>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
