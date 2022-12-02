import React from 'react'
// import { Link } from 'react-router-dom'
import Sida6 from "../image/sida6.jpg"


const Conseilles = () => {
  return (
    <div>
    <table>
        <tr>
            <th>
                <ul  style={{marginTop:20}}>
                    {/* <Link style={{color:'#e52422'}}> */}
                    <li style={{color:"#e52422"}}>
                      Conseilles
                    </li>
                    {/* </Link> */}
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -Ne pas partager de seringues ou d'aiguilles usagées
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -Ne pas avoir de rapports sexuels non protégés 
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -Couvrir toute plaie d’un pansement
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -Porter des gants lors de soins de plaies éventuellement contaminés
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    - Porter des gants lors de manipulation de matériels éventuellement contaminés
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    - Porter des gants lors de manipulation de matériels éventuellement contaminés
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    
                    - Porter des gants lors de manipulation de matériels éventuellement contaminés
                    </li>
                    
                    
                </ul>
            </th>
            <th>
            <img style={{ height: 300, width: 600,marginTop:60 }} src={Sida6} className='Image_List' />
            </th>
        </tr>
    </table>
    
        </div>
  )
}

export default Conseilles