import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './min.css';
import { Navbar } from "./components/navbar";
import Nav from './components/HomePage/nav';
import Heading from './components/HomePage/heading';
import Subhead from './components/HomePage/subhead';
import CountdownTimer from './components/HomePage/CountdownTimer';
import HeaderAbout from './components/AboutPage/HeaderAbout';
import HeadingAbout from './components/AboutPage/headingAbout';
import ContentAbout from './components/AboutPage/contentAbout';
import SpeakersEventhead from './components/SpeakersPage/speakersHead';
import SpeakersCards from './components/SpeakersPage/speakersCards';
import DownloadHead from './components/DownloadPage/downloadHead';
import DownloadPng from './components/DownloadPage/downloadpng';
import DownloadContent from './components/DownloadPage/downloadContent';
import ScheduleHead from './components/SchedulePage/scheduleHead';
import ScheduleContent from './components/SchedulePage/scheduleContent';
// import SponsorsHead from './components/sponsorsHead';
// import FaqHead from './components/faqHead';
import RegistrationHead from './components/RegistrationPage/registrationHead';
import RegistrationBtn from './components/RegistrationPage/registrationBtn';
import DeadlineRegister from './components/RegistrationPage/registrationContent'
import Footer from './components/Footer/footer';
import FooterHome from './components/Footer/footerHome';
import Loader from './components/Loader/loader'



const dateTimeTarget = new Date('February 2, 23 00:00:00 GMT+00:00').getTime();
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(


  <div>


    <section className='page' id='HomePage'>
      <Nav />

      <Navbar />
      <Heading />

      <Subhead />
      <CountdownTimer targetDate={dateTimeTarget} />
      <FooterHome />

    </section>

    <section className='page' id='AboutPage'>
      <HeaderAbout />
      <HeadingAbout />
      <ContentAbout />
    </section>

    <section className='page' id='SpeakersPage'>
      <div className="box3">
        <SpeakersEventhead />

        <SpeakersCards />
      </div>

    </section>

    <section className='page' id='SchedulePage'>
      <ScheduleHead />
      <ScheduleContent />
    </section>
    <section className='page' id='DownloadPage'>
      <DownloadHead />
      <DownloadContent />
      <DownloadPng />
    </section>
    {/* <section className='page' id='SponsorsPage'>
        <SponsorsHead />
      </section> */}
    {/* <section className='page' id='FAQPage'>
        <FaqHead />
      </section> */}
    <section className='page' id='RegistrationPage'>
      <RegistrationHead />
      <DeadlineRegister />
      <RegistrationBtn />
    </section>
    <section id='Footer'>
      <Footer />
    </section>

  </div>
);


