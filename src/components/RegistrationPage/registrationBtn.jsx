import React from "react";
import Button from '@mui/material/Button';

export default function RegistrationBtn() {
  return (
    <>
      <div className="button-container-registration">

        <div className="registration-btn">
          <a href="https://vitchennaievents.com/" target="_blank" className="button flink">
            <Button variant="contained" color="success">
              REGISTER
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
