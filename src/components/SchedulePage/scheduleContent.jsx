import React from "react";
const schedulepng = require("../SchedulePage/6103.png");
const scheduleimg = require("../SchedulePage/Schedule.jpg");
const scheduleimgmobi = require("../SchedulePage/scheduleimagemobi.png");

const rows = [
    {
      _id: "56cf587fe46adb3b8960afe2",
      price: 2000,
      title: "ps3",
      url: "www.google.com",
    }, {
      _id: "56db2bd434df9046e0643d22",
      price: 499,
      title: "HENRIKSDAL",
      url: "http://www.ikea.com/se/sv/catalog/products/S59847817/",
    }
  ];


export default function ScheduleContent() {
    return (
        <div className="cont-image-containerasdfd">

            <div className="scheduleContaaa" id="ScheduleContent">
                {/* <h1 className="line1-schedule">UPDATING</h1>
                <h1 className="line2-schedule">SCHEDULE</h1>
                <h1 className="line3-schedule">SOON</h1> */}

{/* <img className='images image-schedule schedule1' src={schedulepng} alt="schedule png" /> */}
                <img className="images image-schedule schedule2" src={scheduleimg} alt='schedule png' />
                {/* <img className="images image-schedule schedule3" src={scheduleimgmobi} alt='schedule png' /> */}
{/*          
                <img className='images image-schedule schedule1' src={schedulepng} alt="schedule png" />
                <img className="images image-schedule schedule2" src={scheduleimg} alt='schedule png' />
                <img className="images image-schedule schedule3" src={scheduleimgmobi} alt='schedule png' /> */}

              

            </div>
        </div>
    );
}