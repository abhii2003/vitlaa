import React from "react";
const registerpng = require("../components/registerpng.png");

export default function DeadlineRegister() {
    return (
        <>
            <div className="register-png">
                <img src={registerpng} alt="register png" />
            </div>
            <div className="register-deadline" id="Register">
                <h1 className="line1-about">THE LAST DATE </h1>
                <h1 className="line2-about">FOR REGISTRATION</h1>
                <h1 className="line3-about">25 FEBRUARY, 2023</h1>
            </div>
        </>
    );
}