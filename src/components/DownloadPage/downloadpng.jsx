import React from "react";

const brocherimg = require("../DownloadPage/brocher.png");
const brocher = require("../DownloadPage/FDP_on_LA_Brochure.pdf");
export default function DownloadPng() {
    return (
        <>
            <div className="download-png">
                <img src={brocherimg} alt="download png" />
            </div>
            <div className="download-btn">
                <a href={brocher} download="FDP_on_LA_Brochure" className="dtext"><button className="btn btn-contained btn-success" >DOWNLOAD</button></a>
            </div>
        </>
    )
}