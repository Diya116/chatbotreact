import React, { useContext, useEffect, useRef } from "react";

function Singlemessage({data}) {
   
  return (
    <div className="message">
  <div className='messagecontent'>
    
    {data.message&& <p>{data.message} </p>}
    <span className="time">{data.time}</span>
    
  </div>
  
    </div>
   
  )
}

export default Singlemessage;



