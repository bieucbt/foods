import React, { useState, useContext  } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import {navLinks} from '../container'
import NavLinkMenu from './NavLinkMenu.jsx'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping , FaBars, FaXmark} from "react-icons/fa6";
import { StoreContext } from '../context/storeContext.jsx';

const Header = ({scrollY}) => {
    const [active, setActive] = useState('/')
    const [activeMenuMobile, setActiveMenuMobile] = useState(false)
    const {activeMozar, setActiveMozar, getTotalCartAmount
    } = useContext(StoreContext)
    const navigate = useNavigate()


    const handleActiveMenuMobile = () => {
        setActiveMenuMobile(!activeMenuMobile)
    }

    const changeActive = (data) => {
  
        setActive(data)
    }

    const IconMenuMobile = activeMenuMobile ? FaXmark : FaBars
   
  return (
    <header className={`fixed top-0 left-0 right-0 z-10 ${scrollY >0 ? 'bg-white shadow': '' }`} id='/'>
        <div className=' w-full  max-w-[1280px] h-[100px] flex items-center max-sm:justify-between
        m-auto px-10 max-lg:px-5'>
            <div>
                <Link to='/foods' className='text-[40px] font-bold text-orange-600'>Foods.</Link>
            </div>
            <nav className='flex-1 max-sm:hidden'>
                <ul className='flex items-center justify-center gap-4'>
                    {
                        navLinks.map((item, i) => <NavLinkMenu key={i} item={item}
                        active={active} changeActive={changeActive}/> )
                    }
                </ul>
            </nav>
            <div className='hidden max-sm:block relative'>
                <IconMenuMobile size={20} onClick={handleActiveMenuMobile}
                className='cursor-pointer' />
                {
                    activeMenuMobile &&
                    <nav className='absolute top-full right-[-100px] p-5 gap-2 bg-white
                    shadow-lg z-[1000] rounded animation-fadeIn-1s' >
                        <ul className='w-[200px] flex flex-col gap-2'>{
                            navLinks.map((item, i) => <NavLinkMenu key={i} item={item}
                            active={active} changeActive={changeActive} cssA='inline' /> )
                        }</ul>
                    </nav>
                }
            </div>
            <div className='flex items-center gap-8 max-lg:gap-4'>
                <span>
                    <FaSearch size={30} className='cursor-pointer max-lg:w-[20px]' />
                </span>
                <span className='relative'>
                    <FaCartShopping size={30} className='cursor-pointer max-lg:w-[20px]'
                    onClick={() => navigate('/cart')} />
                    <div className={`${getTotalCartAmount() <= 0 ? 'hidden' : ''} absolute w-3 h-3 bg-red-500 rounded-full 
                    top-[-5px] right-[-5px]`}></div>
                </span>
                <button type='button'
                className='p-3 px-8 border-gray-400 border rounded-full
                hover:bg-orange-500 hover:text-white duration-300
                max-lg:p-1 max-lg:px-5'
                onClick={() => setActiveMozar(!activeMozar)}>sign up</button>
            </div>
        </div>
    </header>
  )
}

export default Header
