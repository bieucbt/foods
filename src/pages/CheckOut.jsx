import React from 'react'
import CartTotal from '../components/CartTotal'
import InputCheckOut from '../components/InputCheckOut'

const CheckOut = () => {
  return (
    <div className='py-[100px] pt-[200px] grid grid-cols-3 gap-10'>
      <form className='col-span-2 max-md:col-span-3 '>
        <h1 className='text-[25px] mb-10 font-bold'>Delivery Infomation</h1>
        <div className='grid grid-cols-2 gap-2 pr-[100px] max-md:p-0'>
          <InputCheckOut placeholder='First name' />
          <InputCheckOut placeholder='Last name' />
          <InputCheckOut placeholder='Email' className='col-span-2' />
          <InputCheckOut placeholder='Address' className='col-span-2' />
          <InputCheckOut placeholder='City' />
          <InputCheckOut placeholder='State' />
          <InputCheckOut placeholder='Zip code' />
          <InputCheckOut placeholder='Country' />
          <InputCheckOut placeholder='Phone' className='col-span-2' />
        </div>
      </form>
      <CartTotal buttonCss='max-w-full'
      className='max-md:col-span-2' />
    </div>
  )
}

export default CheckOut
