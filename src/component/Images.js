import React from 'react'
import sida from "../images/sida.png"
import img1 from "../images/img1.png"
import "./Images.css"


const Images = () => {
  return (
    <div classname="container">
<img src={sida}  className='Image_smile1' />
<img src={sida}  className='Image_smile2 '/>
</div>
  )
}

export default Images