import React from 'react'
import Banner from '../component/Banner'
import Conseilles from '../component/Conseilles'
import Contenu from '../component/Contenu'
import Footer from '../component/Footer'
import Headergood from '../component/Headergood'
import Symtomes from '../component/Symtomes'

const Home1 = () => {
  return (
    <div>
        <Headergood/>
        <Banner/>
      <Contenu/>
           <Symtomes/>
        <Conseilles/>
        <Footer/>
        
       
    </div>
  )
}

export default Home1