import React, {useContext, useRef} from 'react'
import SignUp from './SignUp'
import { StoreContext } from '../context/storeContext.jsx';

const Mozar = () => {
  const {activeMozar} = useContext(StoreContext)

 
  
  
  return (
    <div className={`fixed z-50 w-full h-full 
     rgba-Black ${activeMozar ? '' : 'hidden'}
     grid  animation-fadeIn-1s`}>
        <SignUp />
    </div>
  )
}

export default Mozar
