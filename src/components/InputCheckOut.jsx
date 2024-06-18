import React from 'react'

const InputCheckOut = ({type, placeholder, className}) => {
  return (
    <input type={type ? type : 'text'} 
        placeholder={placeholder || 'no value'}
        className={`${className} border border-gray-300 p-2 rounded` } />
  )
}

export default InputCheckOut
