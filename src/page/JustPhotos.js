import React from 'react'
import DarkTheme from '../component/DarkTheme'
import smile from "../images/smile.jpg"
import "./JustPhoto.css"

const JustPhotos = () => {
  return (
    <>
    <div>
        <div>
 <DarkTheme  themp="dark"/>
 </div>

 <div class="row">
  <div class="column">
    <img src={smile} alt="Snow" style={{width:'90%'}} id="im"/>
  </div>
  <div class="column">
    <img src={smile} alt="Forest" style={{width:'90%'}}/>
  </div>
  <div class="column">
    <img  src={smile} alt="Mountains" style={{width:'90%'}} id="imm" />
  </div>
  <div class="column">
    <img  src={smile} alt="Mountains" style={{width:'90%'}}/>
  </div>
  <div class="column">
    <img  src={smile} alt="Mountains" style={{width:'90%'}}/>
  </div>
  <div class="column">
    <img  src={smile} alt="Mountains" style={{width:'90%'}}/>
  </div>
  <div class="column">
    <img  src={smile} alt="Mountains" style={{width:'90%'}} id="immm"/>
  </div>
</div>


    </div>
    </>
  )
}

export default JustPhotos