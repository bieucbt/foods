import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/storeContext'

const CartTotal = ({handleCheckOut, className, buttonCss}) => {
    const {getTotalCartAmount} = useContext(StoreContext)

   
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
          <h3 className='text-[20px] font-bold'>Cart Totals</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between border-b border-gray-300'>
              <span>subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300'>
              <span>Delivery Fee</span>
              <span>${getTotalCartAmount() > 0 ? '2' : '0'}</span>
            </div>
            <div className='flex items-center justify-between border-b border-gray-300'>
              <span className='font-bold'>Total</span>
              <span>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</span>
            </div>
          </div>
          <button type="button"
          className={`px-5 py-2 bg-orange-500 text-white
          rounded-md max-w-[40%] ${buttonCss}`}
          onClick={handleCheckOut}>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default CartTotal
