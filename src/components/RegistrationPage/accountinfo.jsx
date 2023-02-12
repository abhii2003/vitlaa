import React from "react";

const fees = [
  {
    id: 1,
    category: "Indian UG/PG Students",
    fee: "Rs. 1000",
  },
  { id: 2, category: "Indian Research Scholars", fee: "Rs. 1200" },
  { id: 3, category: "Indian Faculty/Industry Person", fee: "Rs. 1500" },
  {
    id: 4,
    category: "VIT Chennai Scholars/Faculty",
    fee: "Rs. 1000",
  },
  { id: 5, category: "Foreign Student/Scholar/Faculty", fee: "$75" },
];

export default function AccountInfo() {
  return (
    <>
      <div>
        <h1 className="page-head">
          FEE <span id="color">DETAILS</span>
        </h1>
      </div>

      <div className="feedetail-content">
        <table>
          <tbody>
            {fees.map(({ id, category, fee }) => {
              return (
                <tr key={`fee-${id}`}>
                  <td>
                    <span id="color">{category}</span>
                  </td>
                  <td>:</td>
                  <td>
                    <span id="color-RED"> {fee}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2 className="page-head">
        How to <span id="color">Pay</span>?
      </h2>

      <section className="section">
        <div className="feedetail-content">
          <h3 id="color">Indian participants:</h3>
          <ol>
            <li>
              Visit{" "}
              <a href="https://vitchennaievents.com">
                https://vitchennaievents.com
              </a>
            </li>
            <li>
              Select Club->FDP->LINEAR ALGEBRA APPLICATION - &#123;
              STUDENT,SCHOLAR, FACULTY,VITians &#125;
            </li>
            <li>Make the Payment</li>
          </ol>
          <h3 id="color">Foreign participants:</h3>
          <p>
            Foreign participants must transfer the registration fee to the
            following account and send the receipt along with your details to
            the convenor at davidraj.micheal@vit.ac.in.
          </p>
          <ol>
            <span id="color">EEFC USD</span> A/C :{" "}
            <span id="color-RED">4151380129</span>
            <br />
            <span id="color">A/C</span> type:
            <span id="color-RED"> EEFC USD A/C</span>
            <br />
            <span id="color">IFSC</span> code:{" "}
            <span id="color-RED">SBIN0018365</span>
            <br />
            <span id="color">MICR</span> code:{" "}
            <span id="color-RED">600002284</span>
            <br />
            <span id="color">SWIFT</span> code:
            <span id="color-RED"> SBININBB298</span>
            <br />
          </ol>
        </div>
      </section>
    </>
  );
}
