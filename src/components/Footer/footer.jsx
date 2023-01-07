import React from "react";

export default function Footer() {
  return (
    <>
    <footer>
      <div className="footer-cont1">
        <h3>Convenors</h3>
        <p className="name-footer">Dr. David Raj Micheal & Dr. Sushmitha P</p>
        <p>Divison of Mathematics, SAS, VIT, Chennai</p>
        <p>
          Email: davidraj.micheal@vit.ac.in
          <p>sushmitha.p@vit.ac.in</p>
          Phone: +91 750287908, +91 9600628354
        </p>
      </div>
      <div className="footer-cont2">
        <h3>Register At</h3>
        <a href="https://vitchennaievents.com" className="dtext"><p className="name-footer2">https://vitchennaievents.com</p></a>
        <p className="copyright-content">© 2023 All rights reserved | Design & Developed by VIT Chennai</p>
      </div>
      <div className="footer-cont3">
        <h3>Designed and Developed By</h3>
        <p className="name-footer3">
        Shashwat Mishra, 
        Abhinav Kushwaha, 
        Venkat Amith
        </p>
        <p>
          github:
          <a href="https://github.com/Shashwatm74" className="dtext flink">Shashwatm74</a>, 
          <a href="https://github.com/abhii2003" className="dtext flink">abhii2003</a>, 
          <a href="https://github.com/homealone07" className="dtext flink">homealone07</a>
          <br />
        </p>
      </div>
    </footer>
    </>
  );
}
