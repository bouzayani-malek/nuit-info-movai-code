import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DarkTheme from "../components/DarkTheme";

import Images from "../components/Images";
import Liste from "../components/Liste";
import Full from "../components/Full";
import HeaderImage from "../components/HeaderImage";

const Home = () => {
  const [color, setColor] = useState(1);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      //setColor();
      const aa = ["red", "yellow", "blue", "black", "white"];
      const ale = Math.floor(Math.random() * 5);
      setColor();
      setNumber(ale);
      setColor(aa[ale]);
      console.log(ale);
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);
  return (
    <>
      <div style={{ backgroundColor: color }}>
        {number == 1 ? (
          <>
            <HeaderImage />
            <Header />

            <Images />
            <DarkTheme themp="light" />
            <Full />
          </>
        ) : (
          <></>
        )}
        {number == 2 ? (
          <>
          
          <Images />
            <DarkTheme themp="light" />
            <Full />
            <HeaderImage />
            <Header />

          </>
        ) : (
          <></>
        )}
        {number == 3 ? (
          <>
           

            <Images />
            <DarkTheme themp="light" />
            <Full />
            <HeaderImage />
            <Header />
          </>
        ) : (
          <></>
        )}
        {number == 4 ? (
          <>
            <HeaderImage />
            
            <Full />
            <Images />
            <DarkTheme themp="light" />
            <Header />
          </>
        ) : (
          <></>
        )}
        {number == 0 ? (
          <>
            <HeaderImage />
            <Header />

            <Images />
            <DarkTheme themp="light" />
            <Full />
          </>
        ) : (
          <></>
        )}

      </div>
    </>
  );
};

export default Home;
