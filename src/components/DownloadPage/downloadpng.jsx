import React from "react";

const brocherimg = require("../DownloadPage/brocher.png");
const brocher = require("../DownloadPage/FDP_on_LA_Brochure.pdf");
export default function DownloadPng() {
    return (
        <>
            <div className="cont-image-container-download ">
                <div className="images-cont mobimagenone">
                    <img className='images' src={brocherimg} alt="brocher png" />
                </div>
            </div>
            <div className='button-container'>
                <div className="download-btn">
                    <a href={brocher} download="FDP_on_LA_Brochure" className="dtext"><button className="btn btn-contained btn-success" >DOWNLOAD</button></a>
                </div>
            </div>
        </>
    )
}