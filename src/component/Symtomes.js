import React from 'react'
// import { Link } from 'react-router-dom'
import Sida5 from "../image/sida5.jpg"


const Symtomes = () => {
  return (
    <div>
    <table>
        <tr>
            <th>
                <ul  style={{marginTop:20}}>
                    {/* <Link style={{color:'#e52422'}}> */}
                    <li style={{color:"#e52422"}}>
                      Symptomes
                    </li>
                    {/* </Link> */}
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -de la fiévre
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -des frisson
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -un mal de gorg
                    </li>
                    <li style={{width:400,listStyleType: 'none',color:'black'}}>
                    -des mox de tête
                    </li>
                </ul>
            </th>
            <th>
            <img style={{ height: 300, width: 600,marginTop:60 }} src={Sida5} className='Image_List' />
            </th>
        </tr>
    </table>
    
        </div>
  )
}

export default Symtomes