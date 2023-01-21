import React from "react";
const registerpng = require("../RegistrationPage/How to register.png");

export default function DeadlineRegister() {
  return (
    <>
      <div className="cont-image-container-registration">

        <div className="images-cont">
          <img className='images' src={registerpng} alt="register png" />
        </div>
      </div>
      <div className="subhead-container-registration">

        <div className="register-deadline" id="Register">
          <h1 className="line1-about">THE LAST DATE </h1>
          <h1 className="line2-about">FOR REGISTRATION</h1>
          <h1 className="line3-about">25 FEBRUARY, 2023</h1>
        </div>
      </div>
    </>
  );
}
