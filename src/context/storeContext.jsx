import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets'



export const StoreContext = createContext(null)

const StoreContextProvider = ({children}) => {

    
    const [countCart, setCountCart] = useState({})
    const [activeMozar, setActiveMozar] = useState(false)


    const addToCart = (id) => {
        
        if(!countCart[id]){
            setCountCart(prev => {return {...prev, [id]: 1}})
        }
        else {
            setCountCart(prev => ({...prev, [id]: prev[id] + 1}))
        }
    }

    const removeFromCart = (id) => setCountCart(prev => ({...prev, [id]: prev[id] - 1}))

   const getTotalCartAmount = () => {
        let total = 0
        for(let key in countCart){
            if(countCart[key] > 0){
                let itemInfo = food_list.find(item => item._id === key)
                total += (itemInfo.price * countCart[key])
            }
        }
        return total
   }
   
    

    const contextValue = {
        food_list,
        addToCart,
        removeFromCart,
        countCart,setCountCart,
        activeMozar, setActiveMozar,
        getTotalCartAmount
    }

    
    return <StoreContext.Provider value={contextValue}>
        {children}
    </StoreContext.Provider>
}

export default StoreContextProvider