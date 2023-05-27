import React, { useState,useContext ,useEffect} from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from "uuid";
import { blue } from '@mui/material/colors';
import "./input.css"
import { Message } from "../Contextapi/Contextapi";
function Input() {
    const[text,setText]=useState("");
    const {message,setMessage}=useContext(Message);
    const date = new Date();
    const handlekey=(e)=>{
        (e.code === "Enter"||e.keyCode == '13')&& handleSend();   
      };
      const handleSend=()=>{
        
        const messages={
            id:1,
            message:text,
            time:`${date.getHours()}:${date.getMinutes()}`
        };
        setMessage([...message,messages]);
        console.log(message);
      }
      useEffect(()=>{
       localStorage.setItem("message",JSON.stringify(message));
      },message);
  return (
    <div className='input'>
                   
                    <input type="text" class="searchterm" placeholder="Type your question.."  onChange={(e) => setText(e.target.value)}
        value={text} onKeyDown={handlekey} />
                 
                    <SendIcon  className="icon" sx={{color:blue[500]}} onClick={handleSend}
                    />
                    
    </div>
  )
}

export default Input
