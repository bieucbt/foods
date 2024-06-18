import React, {useContext, useState} from 'react'
import { StoreContext } from '../context/storeContext'

const Food = ({food}) => {

  const {addToCart,removeFromCart, countCart} = useContext(StoreContext)
  const activeAdd = !!countCart[food._id]

  
  return (
    <div key={food._id}
    className='rounded-5'>
        <div className='relative'>
          <img src={food.image} alt={food.name}
          className='w-full h-[200px] object-cover rounded-t-[20px]' />
          <div className={`absolute bottom-3 right-3 text-center duration-100
          ${activeAdd ? 'flex items-center bg-white py-1 px-1 rounded-full gap-1' : ''}`}
          >
                <div className={`${activeAdd ? '' : 'hidden'} w-7 h-7 border text-[18px]
                rounded-full bg-pink-300 text-pink-600 font-bold cursor-pointer`}
                onClick={() => removeFromCart(food._id)}>-</div>
                <span className={`${activeAdd ? '' : 'hidden'}`}>{countCart[food._id]}</span>
                <div className={`w-7 h-7 border text-[18px]
                rounded-full  font-bold cursor-pointer
                ${!activeAdd ? 'mr-3 mb-1 bg-white' : 'bg-green-300 text-green-600'}`}
                onClick={() => addToCart(food._id)}>+</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-3'>
            <div className='flex items-center justify-between max-md:flex-col'>
                <h3 className='font-bold text-[18px]'>{food.name}</h3>
                <div className='text-orange-500'>{Math.floor(Math.random() * 5)} star</div>
            </div>
            <p className='text-gray-500'>{food.description}</p>
            <p className='text-orange-500 font-bold text-[22px]'>${food.price}</p>
        </div>
    </div>                
  )
}

export default Food
