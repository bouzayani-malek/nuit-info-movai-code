import React from 'react'
import smile from "../images/smile.jpg"
import DarkTheme from './DarkTheme'

const Pictures = () => {
  return (
    <div>
        <DarkTheme themp="dark"/>
   <ul style={{listStyleType:'none',marginLeft:600}}>
<li style={{color:"yellow",fontSize:100}}>FUGLY</li>
<li> <img style={{height: 300}} src={smile}  className='Image_List'/></li>
<li style={{color:"white",marginLeft:-600,marginTop:50}}>what's hot? i don't know. what's NOT - my FUGLY WEBSITE evidently.</li>
<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>
<li  style={{color:"white",marginLeft:-600,marginTop:30}}>it wasn't intentional. sometimes fugly just happens.</li>
<li  style={{color:"red",marginLeft:-600,marginTop:30}}>be sure not to miss my LITTLE FUGLY and GROTESQUE FUGLY (if you have a strong constitution).</li>
<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>
<li  style={{color:"red",marginLeft:-600,marginTop:30}}>and, of course, there'sFUGLY REVIEWand FUGLY, CREEPY & BAD</li>
<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>

<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>

<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>
<li  style={{color:"red",marginLeft:-600,marginTop:30}}>and, of course, there'sFUGLY REVIEWand FUGLY, CREEPY & BAD</li>
<li> <img style={{height: 300,marginTop:50}} src={smile}  className='Image_List'/></li>
<li  style={{color:"red",marginLeft:-600,marginTop:30}}>and, of course, there'sFUGLY REVIEWand FUGLY, CREEPY & BAD</li>
<li style={{color:"yellow",fontSize:100}}>FUGLY</li>





   </ul>


    </div>
  )
}

export default Pictures