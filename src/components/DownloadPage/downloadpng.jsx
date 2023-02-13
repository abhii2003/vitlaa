import React from "react";
import Button from '@mui/material/Button';
const brocherimg = require("../DownloadPage/brocher.png");
const brocher = require("../DownloadPage/FDP_on_LA_Brochure.pdf");
export default function DownloadPng() {
  return (
    <>
      <div className="cont-image-container-download ">
        <div className="images-cont mobimagenone">
          <img className="images" src={brocherimg} alt="brocher png" />
        </div>
      </div>
      <div className="button-container">
        <div className="download-btn">
          <a href={brocher} download="FDP_on_LA_Brochure" className="button flink">
            <Button variant="contained" color="success">
              DOWNLOAD BROCHURE
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
