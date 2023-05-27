import { Close } from '@mui/icons-material'
import React from 'react'
import { useContext } from 'react';
import { Open } from '../Contextapi/Contextapi'
function Header({setOpen,open}) {
  
  return (
    <div className='header'>
        <div className='leftside'>
            <span>assistant</span>
        </div>
        <div className='close' onClick={()=>{setOpen(!open)}}>
            <Close/>
        </div>
      
    </div>
  )
}

export default Header
