import React from 'react'
import { menu_list } from '../assets'

const MenuList = ({category, handleClickMenuList}) => {

  return (
    <section className='flex flex-col gap-6 max-md:items-center' id='menu'>
      <h1 className='first-letter:uppercase text-[30px]'>Explore our menu</h1>
      <p className='text-gray-500 w-[50%] max-md:w-[80%] 
      max-md:text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio cum deserunt placeat! 
        Illo inventore quisquam rerum eveniet, rem iste libero. Blanditiis nisi exercitationem 
        aspernatur ullam.</p>
      <div className='flex flex-wrap items-center gap-5 justify-between
        max-lg:grid grid-cols-4 max-md:grid-cols-3'>
            {
                menu_list.map((item, i) => <div key={i}
                className='flex flex-col items-center'>
                    <img src={item.menu_image} alt={item.menu_name}
                    className={`w-[100px] rounded-full cursor-pointer duration-200
                        ${category === item.menu_name ? 'border-[4px] p-1 border-orange-500' : ''}`}
                    onClick={() => handleClickMenuList(category === item.menu_name ? '' : item.menu_name)} />
                    <span className='text-gray-500 mt-4'>{item.menu_name}</span>
                </div>)
            }
        </div>
        <hr className='bg-gray-500' />
    </section>
  )
}

export default MenuList
