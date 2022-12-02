import React from 'react'
import { Link } from 'react-router-dom'
import Liste from './Liste'
import smile from "../images/smile.jpg"
import Sida1 from "../images/sida1.png"
import Sida2 from "../images/sida2.jpg"



const Full = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>
                        <Liste />
                    </th>
                    <th >
                        <ul style={{marginTop:-400, listStyleType: 'none' ,marginLeft:-80}}>
                            <li style={{ color: "orange", background: "white", width: 140, marginTop: 300 ,textAlign:"left"}}> HI everybody!</li>
                           
                            <Link style={{ color: "red" }} >
                                <li style={{ color: "red", width: 300, marginTop: 10, textAlign: "left" }}><h2> TWITTER UGLY</h2></li>
                            </Link>
                            <li>
                                <img style={{ height: 400, width: 380 }} src={Sida1} className='Image_List' />
                            </li>
                            <li>
                                <img style={{ height: 200, width: 380 }} src={Sida2} className='Image_List' />
                            </li>
                            <li>
                                <img style={{ height: 400, width: 380 }} src={Sida1} className='Image_List' />
                            </li>
                            <li>
                                <img style={{ height: 200, width: 380 }} src={Sida2} className='Image_List' />
                            </li>
                            <li>
                                <img style={{ height: 400, width: 380 }} src={Sida1} className='Image_List' />
                            </li>
                            <li>
                                <img style={{ height: 200, width: 380 }} src={Sida2} className='Image_List' />
                            </li>
                        </ul>



                    </th>

                </tr>
            </table>

        </div>
    )
}

export default Full