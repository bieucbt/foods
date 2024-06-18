import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {StoreContext} from '../context/storeContext' 
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const {countCart, food_list, setCountCart,
    getTotalCartAmount,  removeFromCart, addToCart} = useContext(StoreContext)
  
  let sum = 0
  const navigate = useNavigate()
 
  const handleCheckOut = () => {
    if(getTotalCartAmount() > 0){
      navigate('/checkout')
    }
    
  }


  const deleteCount = (id) => {
    setCountCart({...countCart,  [id]: 0})
  }
    

  return (
    <div className='pt-[100px]'>
      <div className='flex flex-col'>
        <div className='grid grid-cols-6 border-b border-gray-300 
        py-2 text-gray-400'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quanlity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {
          food_list.map(item => {
          const totalPrice = item.price * countCart[item._id]
          sum +=  totalPrice ? totalPrice : 0 
          if(countCart[item._id] > 0){
          return <div 
          key={item._id}
          className='grid grid-cols-6 border-b border-gray-300 py-2
          items-center max-sm:text-center'>
            <div>
              <img src={item.image} alt={item.name}
              className='w-[50px] object-contain' />
            </div>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <div className='flex'>
                <div className={` w-5 h-5 border text-center text-[18px]  font-bold cursor-pointer
                flex items-center justify-center`}
                onClick={() => removeFromCart(item._id)}>-</div>
                <p className='mx-2' >{countCart[item._id]}</p>
                <div className={`w-5 h-5 border text-center text-[18px]  font-bold cursor-pointer 
                flex items-center justify-center`}
                onClick={() => addToCart(item._id)}>+</div>
            </div>
            <p>${item.price * countCart[item._id]}</p>
            <p className='cursor-pointer p-2'
            onClick={() => deleteCount(item._id)}>x</p>
          </div>}}
          )
        }

        
      </div>
      <div className='mt-[60px] grid grid-cols-2 gap-[10%] pb-[100px]'>
        <CartTotal handleCheckOut={handleCheckOut} buttonCss='max-md:max-w-[100%]
        max-lg:max-w-[60%]' className='max-md:col-span-2' />
        <div className='max-md:col-span-2'>
          <form action="">
            <h4 className='text-gray-400'>if you have a promo code. Enter it here</h4>
            <div className='grid grid-cols-3 mt-2'>
              <input type="text" className='p-2 bg-gray-200
              col-span-2 rounded-l rounded-bl outline-none'
              placeholder='promo code' />
              <button type='button' className='bg-black text-white
              rounded-tr rounded-br'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
