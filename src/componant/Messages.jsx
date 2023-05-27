import React,{useContext} from 'react'
import Singlemessage from './Singlemessage'
import { Message } from '../Contextapi/Contextapi'

function Messages() {
    const {message,setMessage}=useContext(Message);
  return (
    <div className='messages'>
    {
    message.map((data)=>(
         <Singlemessage id={data.id} data={data}/>
    )) 
    }
    </div>
  )
}

export default Messages
