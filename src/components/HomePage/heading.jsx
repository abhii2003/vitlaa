import React from "react";
const logo = require("../HomePage/vitlogo.png");
let elements = document.querySelectorAll('.rolling-text');

// elements.forEach(element => {
//   let innerText = element.innerText;
//   element.innerHTML = '';

//   let textContainer = document.createElement('div');
//   textContainer.classList.add('block');

//   for (let letter of innerText) {
//     let span = document.createElement('span');
//     span.innerText = letter.trim() === '' ? '\xa0' : letter;
//     span.classList.add('letter');
//     textContainer.appendChild(span);
//   }

//   element.appendChild(textContainer);
//   element.appendChild(textContainer.cloneNode(true));
// });
// // for presentation purpose
// setTimeout(() => {
//   elements.forEach(element => {
//     element.classList.add('play');
//   })
// }, 600);

// elements.forEach(element => {
//   element.addEventListener('mouseover', () => {
//     element.classList.remove('play');
//   });
// });






export default function Heading() {
  return (
    <>
      <div className="logo-container">
        <h1 className="img-container">
          <img src={logo} className="img" />
        </h1>
      </div>
      <div className="heading-container">
        <h1 className="first-line rolling-text" id="FirstLine">
          FDP ON
        </h1>
        <h1 className="second-line rolling-text" id="SecondLine">
          LINEAR ALGEBRA
        </h1>
        <h1 className="third-line rolling-text" id="ThirdLine">
          AND ITS APPLICATIONS
        </h1>
      </div>
    </>

  );
}
