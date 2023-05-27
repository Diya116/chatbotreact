import React, { useEffect } from 'react'
import { createContext, useState } from 'react'
 export const Message=createContext();

function Contextapi({children}) {
  const[message,setMessage]=useState([]);

  return (
    <Message.Provider value={{message,setMessage}}>
        {children}
    </Message.Provider>
  )
}

export default Contextapi