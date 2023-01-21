import React from "react";
const schedulepng = require("../SchedulePage/6103.png");
const scheduleimg = require("../SchedulePage/scheduleimage2.png");
const scheduleimgmobi = require("../SchedulePage/scheduleimagemobi.png");


export default function ScheduleContent() {
    return (
        <div className="cont-image-container">

            <div className="scheduleCont" id="ScheduleContent">
                {/* <h1 className="line1-schedule">UPDATING</h1>
                <h1 className="line2-schedule">SCHEDULE</h1>
                <h1 className="line3-schedule">SOON</h1> */}
                <img className='images image-schedule schedule1' src={schedulepng} alt="schedule png" />
                <img className="images image-schedule schedule2" src={scheduleimg} alt='schedule png' />
                <img className="images image-schedule schedule3" src={scheduleimgmobi} alt='schedule png' />

            </div>
        </div>
    );
}