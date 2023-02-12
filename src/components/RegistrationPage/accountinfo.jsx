import React from "react";


export default function AccountInfo() {
    return (
        <>
            <div className="feedetail">
                <h1 className="page-head">FEE <span id="color">DETAILS</span></h1>
            </div>
            <div className="feedetail-content">
                <ol >
                    <li><span id="color">LINEAR ALGEBRA APPLICATIONS</span>-VITIANS :<span id="color-RED"> Rs.1000</span></li>
                    <li><span id="color">LINEAR ALGEBRA APPLICATIONS</span>-FACULTY : <span id="color-RED">Rs.1500</span></li>
                    <li><span id="color">LINEAR ALGEBRA APPLICATIONS</span>-SCHOLAR :<span id="color-RED"> Rs.1200</span></li>

                </ol>
            </div>
            <div className="feedetail">
                <h1 className="page-head">ACCOUNT <span id="color">INFORMATION</span> </h1>
            </div>
            <div className="feedetail-content">

                <ol>
                    <span id="color">EEFC USD</span> A/C : <span id="color-RED">4151380129</span><br />
                    <span id="color">A/C</span> type:<span id="color-RED"> EEFC USD A/C</span><br />
                    <span id="color">IFSC</span> code: <span id="color-RED">SBIN0018365</span><br />
                    <span id="color">MICR</span> code: <span id="color-RED">600002284</span><br />
                    <span id="color">SWIFT</span> code:<span id="color-RED"> SBININBB298</span><br />
                </ol>
            </div>

        </>
    );
}