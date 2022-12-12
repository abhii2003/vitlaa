import React from "react";
import { Button } from '@mui/material';

const brocherimg = require("../components/brocher.png");
const brocher= require ("../document/FDP_on_LA_Brochure.pdf");
export default function DownloadPng() {
    return (
        <>
            <div className="download-png">
                <img src={brocherimg} alt="download png" />
            </div>
            <div className="download-btn">
            <a href={brocher} download="FDP_on_LA_Brochure" className="dtext"><Button variant="contained" color="success" >DOWNLOAD</Button></a>
            </div>
        </>
    )
}