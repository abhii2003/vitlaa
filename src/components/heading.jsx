import React from "react";
const logo= require("../image/vitlogo.png");

export default function Heading() {
  return (
    <>
      <div className="heading">
        <h1 className="img-container">
        <img src={logo} className="img" />
        </h1>
        <h1 className="first-line" id="FirstLine">
          FDP ON
        </h1>
        <h1 className="second-line" id="SecondLine">
          LINEAR ALGEBRA
        </h1>
        <h1 className="third-line" id="ThirdLine">
          AND ITS APPLICATIONS
        </h1>
      </div>
    </>
  );
}
