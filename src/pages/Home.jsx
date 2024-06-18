import React, {useState, useContext} from 'react'
import Banner from '../components/Banner'
import MenuList from '../components/MenuList'
import FoodList from '../components/FoodList'
import {StoreContext} from '../context/storeContext'
import AppDownload from '../components/AppDownload'

const Home = () => {

  const {food_list} = useContext(StoreContext)
  const [category, setCategory] = useState('')
  const [foods, setFoods] = useState(food_list)


  const handleClickMenuList = (data) => {
    setCategory(data)
    if(data === ''){
      setFoods(food_list)
    }else{
      const newListFood = food_list.filter(item => item.category === data)
      setFoods(newListFood)
    }
    
  }

  return (
    <div className='pt-[100px] flex flex-col gap-10 pb-[60px]'>
      <Banner />
      <MenuList category={category} handleClickMenuList={handleClickMenuList} />
      <FoodList foods={foods} />
      <AppDownload />
    </div>
  )
}

export default Home
