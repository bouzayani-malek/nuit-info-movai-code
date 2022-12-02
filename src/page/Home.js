import React from 'react'
import Header from '../component/Header'
import DarkTheme from '../component/DarkTheme'

import Images from '../component/Images'
import Liste from '../component/Liste'
import Full from '../component/Full'
import HeaderImage from '../component/HeaderImage'



const Home = () => {
  return (
    <>
      <HeaderImage />
      <Header />

      <Images />
      <DarkTheme themp="light" />
      <Full />



    </>
  )
}

export default Home