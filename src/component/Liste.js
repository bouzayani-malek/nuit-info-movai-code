import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import smile from "../images/smile.jpg"
import "./Liste.css"
import Modal from './Modal'
import Affiche from "../images/Affiche.png"
import statistique from "../images/statistique.jpg"
import Sida1 from "../images/sida1.png"

const Liste = () => {
  const [isShown, setIsShown] = useState(false);
  const [isopen, setopen] = useState(false);

  return (
    <div style={{ marginTop: 330 }}>
      <ul style={{ listStyleType: 'none', marginLeft: -30 }}>
        <Link style={{ color: "white" }} to="/information">
          <li style={!isShown ? { backgroundColor: 'black', width: 170, color: "white", textTransform: 'none' } : { backgroundColor: 'white', width: 300, color: "black", textTransform: 'none' }}>
            <h3 onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>WHAT IS SIDA?</h3></li>
        </Link>
        <li style={{ width: 800, color: "black", marginTop: -20 }}>Le virus de l'imunodéfisience humaine (VIH) et un tipe de virus qui attak le sistème imunitaire du cors. Bien que l'infeksion par le VIH soi </li>
        <Link style={{ color: "red" }} to={"/picture"} >
          <li style={{ backgroundColor: 'green', width: 400, color: "red", textTransform: 'none' }}><h4> une affeksion chronik maîtrizable, si el n'est pas traitée, el peus affaiblir le sistème imunitaire ou évolué vers le syndrome </h4></li>

        </Link>
        <li style={{ backgroundColor: 'green', width: 400, color: "black", textTransform: 'none', marginTop: -25 }}>d'immunodéficience acquise (sida).</li>
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 220, color: "white", textTransform: 'none' }}><h4>WHAT IS SIDA?</h4></li>
        </Link>

        <li style={{ width: 500, color: "black", marginTop: -20 }}>Le virus de l'imunodéfisience humaine (VIH) et un tipe de virus qui attak le sistème imunitaire du cors. Bien que l'infeksion par le VIH soi</li>
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 400, color: "white", textTransform: 'none' }}><h4>une affeksion chronik maîtrizable, si el n'est pas traitée, el peus affaiblir le sistème imunitaire ou évolué vers le syndrome</h4></li>
        </Link>
        
        <Link style={{ color: "red" }}>
          <li style={{ backgroundColor: 'black', width: 200, color: "red", textTransform: 'none', textAlign: "center" }}><button onClick={() => setopen(true)} style={{ color: "grey", background: "red" }}>Details </button></li>
        </Link>


        {isopen ? <Modal onClick={() => setopen(false)}></Modal> : <></>}
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 180, color: "white", textTransform: 'none' }}><h4>Simptomes d'une infecksion par le VIH:</h4></li>
        </Link>
        <li style={{ width: 300, color: "black", marginTop: -20 }}>Certaine personnes peuve ne présenté ocun simptôme aprè avoir contracté le VIH de fason à se que l'infeksion ne soi pa diagnostikée jusku'à se que les simptôme du sida se manifest. sela peus prendre jusku'à 10 an.</li>
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'green', width: 400, color: "black", textTransform: 'none' }} ><h4>de la fièvre</h4></li>
        </Link>


        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 400, color: "white", textTransform: 'none' }}><h4>	un fatig</h4></li>
        </Link>

        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'Chartreuse', width: 400, color: "white", textTransform: 'none' }}><h4>des frisson</h4></li>
        </Link>
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'Crimson', width: 400, color: "white", textTransform: 'none' }}><h4>des frisson</h4></li>
        </Link>

        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 500, color: "white", textTransform: 'none' }}><h4>	des douleur artikulaires</h4></li>
        </Link>

        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'violet', width: 140, color: "white", textTransform: 'none' }}><h4>Contact</h4></li>
        </Link>

        <li>
          <img style={{ height: 600, width: 500 }} src={Affiche} className='Image_List' />
        </li>
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 300, color: "white", textTransform: 'none' }}><h4>Statistiques </h4></li>
        </Link>
        <img style={{ height: 600, width: 500 }} src={statistique} className='Image_List' />
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 235, color: "white", textTransform: 'none' }}><h4>Modes de transmission </h4></li>
        </Link>

        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'GreenYellow', width: 400, color: "BlueViolet", textTransform: 'none' }}><h4>-Transmission due au partage d’aiguilles et de seringues </h4></li>
        </Link>

        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 400, color: "white", textTransform: 'none' }}><h4>Transmission de la mère à l’enfant </h4></li>
        </Link>
        
        <Link style={{ color: "white" }}>
          <li style={{ backgroundColor: 'black', width: 400, color: "white", textTransform: 'none' }}><h4>Transmission de la mère à l’enfant </h4></li>
        </Link>

        <img style={{ height: 150, width: 180 }} src={Sida1} className='Image_List' />
        


      </ul>
    </div>
  )
}

export default Liste