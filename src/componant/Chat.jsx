import React from 'react'
import { useState } from 'react';
import Header from './Header';
import Messages from './Messages';
import Input from "./Input"
import "./Chat.css"
import MessageIcon from '@mui/icons-material/Message';

function Chat() {
    const[open,setOpen]=useState(false);
    console.log(open);
  return (
    <div>
 { open&&(
    <div className='chat'>
   
   
       <Header setOpen={setOpen} open={open}/>
       <Messages/>
       <Input/>
       
    </div>
 )
}
    <div className='iconmessage'onClick={()=>{setOpen(!open)}}>
        <MessageIcon/>
    </div>
    </div>
  )
}

export default Chat
