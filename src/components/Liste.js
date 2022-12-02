import React,{ useState } from 'react'
// import { Link } from 'react-router-dom'
import smile from "../images/smile.jpg"
import "./Liste.css"
import Modal from './Modal'

const Liste = () => {
    const [isShown, setIsShown] = useState(false);
    const [isopen, setopen] = useState(false);

  return (
    <div style={{marginTop:330}}>
    <ul style={{listStyleType:'none',marginLeft:-30}}>
    {/* <Link style={{color:"white"}} to="/information"> */}
    <li style={!isShown?{backgroundColor:'black',width:170,color:"white",textTransform:'none'}:{backgroundColor:'white',width:300,color:"black",textTransform:'none'}}>
        <h3  onMouseEnter={() => setIsShown(true)}
           onMouseLeave={() => setIsShown(false)}>WHAT IS SIDA?</h3></li>
    {/* </Link> */}
    <li style={{width:800,color:"black",marginTop:-20}}>Le virus de l'imunodéfisience humaine (VIH) et un tipe de virus qui attak le sistème imunitaire du cors. Bien que l'infeksion par le VIH soi </li>
    {/* <Link style={{color:"red"}} to={"/picture"} > */}
     <li style={{backgroundColor:'green',width:400,color:"red",textTransform:'none'}}><h4> une affeksion chronik maîtrizable, si el n'est pas traitée, el peus affaiblir le sistème imunitaire ou évolué vers le syndrome </h4></li>
   
     {/* </Link> */}
     <li style={{backgroundColor:'green',width:400,color:"black",textTransform:'none',marginTop:-25}}>d'immunodéficience acquise (sida).</li>
     {/* <Link style={{color:"white"}}> */}
     <li style={{backgroundColor:'black',width:220,color:"white",textTransform:'none'}}><h4>WHAT IS SIDA?</h4></li>
     {/* </Link> */}
     
  <li style={{width:500,color:"black" ,marginTop:-20}}>Le virus de l'imunodéfisience humaine (VIH) et un tipe de virus qui attak le sistème imunitaire du cors. Bien que l'infeksion par le VIH soi</li>
   {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:190,color:"white",textTransform:'none'}}><h4>une affeksion chronik maîtrizable, si el n'est pas traitée, el peus affaiblir le sistème imunitaire ou évolué vers le syndrome</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-25}}>accept the lord ugly - and boy is it ever</li>
  {/* <Link style={{color:"red"}}> */}
  <li style={{backgroundColor:'black',width:200,color:"red",textTransform:'none',textAlign:"center"}}><button onClick={()=>setopen(true)} style={{color:"grey",background:"red"}}>Details </button></li>
  {/* </Link> */}
  

 {isopen?<Modal onClick={()=>setopen(false)}></Modal>:<></>}
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:180,color:"white",textTransform:'none'}}><h4>GROTESQUE WEBSITES</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>you don't want to go here</li>
  {/* <Link style={{color: "white"}}> */}
  <li style={{backgroundColor:'green',width:400,color:"black",textTransform:'none'}} ><h4>PHOTOSHOP GOOFS- AND THEY'RE UGLY</h4></li>
  {/* </Link> */}
  <li style={{width:400,color:"black",marginTop:-25,backgroundColor:'green'}}>ugly website - with ugly photoshop goof-ups</li>

  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:170,color:"white",textTransform:'none'}}><h4>UGLY, DUMB and BAD</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>ugly, dumb, incoherent & bad websites, more than't want to go here</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'Chartreuse',width:240,color:"white",textTransform:'none'}}><h4>UGLIER, DUMBER and BADDER</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>the ugliest, dumbest, baddest and worstest here</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'Crimson',width:90,color:"white",textTransform:'none'}}><h4>FAZE UGLY</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>faze ugly, whatever the hell that means</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:270,color:"white",textTransform:'none'}}><h4>THE BAD, THE WORSE & THE UGLY</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>an ugly paul krugman piece on some political ugliness
it's some ny times kind of ugly</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'violet',width:140,color:"white",textTransform:'none'}}><h4>THE UGLY VOLVO</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>no idea, but i like the website</li>
  <li>
  <img style={{height: 100}} src={smile}  className='Image_List'/>
  </li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:300,color:"white",textTransform:'none'}}><h4>POINTLESS, SLOW-LOADING and UGLY</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>you heard me</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:235,color:"white",textTransform:'none'}}><h4>BIG UGLY PICTURES WEBSITES</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>big ugly pictures - websites (for those of you not satisfied with THIS BIG UGLY website)</li>

  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'GreenYellow',width:290,color:"BlueViolet",textTransform:'none'}}><h4>TWITTER IS A ROTTEN UGLY WEBSITE</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>band this is ugly facade from there</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:240,color:"white",textTransform:'none'}}><h4>SUICIDE BRIDGE RESTAURANT</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>an ugly website name - who wants to eat at a place called Suicide Bridge?</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:260,color:"white",textTransform:'none'}}><h4>BIG UGLY SWEATERS on TWITTER</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>the biggest, ugliest sweaters- on TWITTER. YUCK!</li>
  <img style={{height: 150, width:180}} src={smile}  className='Image_List'/>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:"DarkMagenta",width:200,color:"red",textTransform:'none'}}><h4>TWITTER UGLY WEBSITES</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>we're on a TWITTER theme now- and this is there BIG UGLY contender</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:75,color:"white",textTransform:'none'}}><h4>PENCILS</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>well-designed, beautiful website, for pencil freaks</li>
  {/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:130,color:"green",textTransform:'none'}}><h4>UGLY BROTHERS</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>they're brothers and Boy Are They Ugly
ugly australian bbq</li>
{/* <Link style={{color:"white"}}> */}
  <li  style={{backgroundColor:'black',width:250,color:"red",textTransform:'none'}}><h4>HOPELESSLY UGLY BLOG NAMES</h4></li>
  {/* </Link> */}
  <li style={{width:300,color:"black",marginTop:-20}}>ugly AND hopeless. imagine</li>


</ul>
    </div>
  )
}

export default Liste