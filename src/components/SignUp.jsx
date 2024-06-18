import React, {useState, useContext} from 'react'
import { FaXmark } from "react-icons/fa6";
import { StoreContext } from '../context/storeContext.jsx';

const Input = ({placeholder, type}) => {
  return <input type={type || 'text'} placeholder={placeholder || 'value'}
          className='border border-gray-400 p-1 rounded-md' />
}

const SignUp = () => {
  const [signUpIn, setSignUpIn] = useState('sign up')
  const {setActiveMozar} = useContext(StoreContext)

  const handleToggleSignUpIn = () => {
    if(signUpIn === 'sign up')
      setSignUpIn('sign in')
    else if(signUpIn === 'sign in')
      setSignUpIn('sign up')
  }

  return (
    <div className=' bg-white rounded-md w-[330px] place-self-center'>
      <form className='p-5'>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-[20px]'>{`${signUpIn === 'sign up'? 'Sign up' : 'Login'}`}</span>
            <FaXmark size={20} onClick={() => setActiveMozar(false)}
            className='cursor-pointer' />
          </div>
          <div className='flex flex-col gap-4 mt-5'>
          {signUpIn === 'sign up'? 
             <Input placeholder='name' /> : <></>}
            <Input placeholder='email' />
            <Input placeholder='password' type='password' />
          </div>
          <div className='mt-3'>
            <button type="button"
            className='w-full bg-orange-500 text-white
            p-2 rounded-md'>
              {signUpIn === 'sign up'? 'Sign up' : 'Login'}
            </button>
          </div>
          <div className='flex gap-1 mt-3'>
            <input type="checkbox" className='self-start mt-[4px] cursor-pointer'/>
            <p className='text-gray-400'>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          <div className='mt-4 text-gray-400'>
            {signUpIn === 'sign up'? 
              <p>Do you have a account? <span onClick={handleToggleSignUpIn}
              className='text-orange-400 cursor-pointer'> Login</span></p> : 
              <p>create a new account?<span onClick={handleToggleSignUpIn}
              className='text-orange-400 cursor-pointer'> Click here</span> </p>}
          </div>
          
      </form>
    </div>
    
  )
}

export default SignUp
