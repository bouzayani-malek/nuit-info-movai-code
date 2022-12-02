import React from "react";
import "./Button.css"
import amazon from"../images/amazon.jpg"

const Buttons = ()=> {
  return (
    <div>
   <div className="center" row="6">
    
    <span> TRAILERS  | </span>
    <span>spanRESS      |</span>
 
    <span>NEWS  </span>
    <span>SCREENINGS  |</span>
    <span>THE ROOM TEAM |</span>
    <span> STORE |</span>
    </div>
    <div>
   <img src={amazon}  className='image-amazon' alt='hdydg' />
   </div>
   </div>
  
  );
}
 export default Buttons