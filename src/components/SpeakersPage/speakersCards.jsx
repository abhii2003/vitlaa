import React from 'react';

const prof1 = require("../SpeakersPage/prof1.png");
const prof2 = require("../SpeakersPage/prof2.png");
const prof3 = require("../SpeakersPage/prof3.png");
const prof4 = require("../SpeakersPage/prof4.png");
const prof5 = require("../SpeakersPage/prof5.png");
const prof6 = require("../SpeakersPage/prof6.png");
const prof7 = require("../SpeakersPage/prof7.png");

export default function SpeakersCards() {
        return (
                <>
                        {/* Row 1 */}
                        <div className="box1">
                                {/* speaker 1 */}
                                <div className="cont1 cont">
                                        <img className='img-speaker' src={prof1} />

                                        <div className="content prof1">
                                                <h4>Dr. T. Parthasarathy</h4>
                                                <p>Department of Mathematics <br /><br />CMI, Chennai</p>
                                        </div>
                                </div>
                                {/* speaker 2 */}
                                <div className="cont2 cont">
                                        <img className='img-speaker' src={prof2} />

                                        <div className="content prof2">
                                                <h4>Dr. Arindama Singh</h4>
                                                <p>Department of Mathematics <br />IIT, Madras</p>
                                        </div>
                                </div>
                                {/* speaker 3*/}
                                <div className="cont3 cont">
                                        <img className='img-speaker' src={prof3} />

                                        <div className="content prof3">
                                                <h4>Dr. K. Manjunatha Prasad</h4>
                                                <p>Department of Data Science<br /> MAHE, Manipal</p>
                                        </div>
                                </div>
                                {/* speaker 4 */}
                                <div className="cont4 cont">
                                        <img className='img-speaker' src={prof4} />

                                        <div className="content prof4">
                                                <h4>Dr. K.C. Sivakumar</h4>
                                                <p>Department of Mathematics<br /> IIT Madras
                                                </p>
                                        </div>
                                </div>


                        </div>
                        {/* Row 2 */}
                        <div className="box2">
                                {/* speaker 5 */}
                                <div className="cont5 cont">
                                        <img className='img-speaker' src={prof5} />

                                        <div className="content prof5">
                                                <h4>Dr. Biswajit Deb</h4>
                                                <p>Department of Mathematics<br /> SMIT, Sikkim
                                                </p>
                                        </div>
                                </div>
                                {/* speaker 6 */}
                                <div className="cont6 cont">
                                        <img className='img-speaker' src={prof6} />

                                        <div className="content prof6">
                                                <h4>Dr. P. Vanchinathan</h4>
                                                <p>School of Advanced Sciences<br /> VIT, Chennai</p>
                                        </div>
                                </div>
                                {/* speaker 7 */}
                                <div className="cont7 cont">

                                        <img className='img-speaker' src={prof7} />

                                        <div className="content prof7">
                                                <h4>Dr. P. Sushmitha</h4>
                                                <p>School of Advanced Sciences<br /> VIT, Chennai</p>
                                        </div>
                                </div>
                        </div>





                </>
        );
}