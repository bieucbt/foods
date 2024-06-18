import React from 'react'
import Food from './food.jsx'

const FoodList = ({foods}) => {
  return (
    <div>
        <h2 className='first-letter:uppercase text-[25px]
        mb-[30px] font-bold max-md:text-center'>Top dishes near you</h2>  
        <div className='grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-3 animation-fadeIn-odd-even'>
            {
                foods.map(food => <Food key={food._id} food ={food} />)
            }
        </div>  
    </div>
  )
}

export default FoodList
