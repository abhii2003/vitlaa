import React from "react";
const schedulepng = require("../SchedulePage/6103.png");

export default function ScheduleContent() {
    return (
        <div className="cont-image-container">

            <div className="scheduleCont" id="ScheduleContent">
                {/* <h1 className="line1-schedule">UPDATING</h1>
                <h1 className="line2-schedule">SCHEDULE</h1>
                <h1 className="line3-schedule">SOON</h1> */}
                <img className='images image-schedule' src={schedulepng} alt="schedule png" />
            </div>
        </div>
    );
}