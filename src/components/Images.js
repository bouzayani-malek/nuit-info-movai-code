import React from "react";
import smile from "../images/smile.jpg";
import img1 from "../images/sida1.png";
import "./Images.css";

const Images = () => {
  return (
    <div className="container" >
      <img src={img1} className="Image_smile1" />
      <img src={img1} className="Image_smile2 " />
    </div>
  );
};

export default Images;
