import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/HomePage/nav';
import { Navbar } from "./components/navbar";
import Heading from './components/HomePage/heading';
import Subhead from './components/HomePage/subhead';
import FooterHome from './components/Footer/footerHome';
import HeaderAbout from './components/AboutPage/HeaderAbout';
import HeadingAbout from './components/AboutPage/headingAbout';
import ContentAbout from './components/AboutPage/contentAbout';
import SpeakersEventhead from './components/SpeakersPage/speakersHead';
import SpeakersCards from './components/SpeakersPage/speakersCards';
import ScheduleHead from './components/SchedulePage/scheduleHead';
import DownloadHead from './components/DownloadPage/downloadHead';
import DownloadPng from './components/DownloadPage/downloadpng';
import DownloadContent from './components/DownloadPage/downloadContent';
import ScheduleContent from './components/SchedulePage/scheduleContent';
// import SponsorsHead from './components/sponsorsHead';
// import FaqHead from './components/faqHead';
import RegistrationHead from './components/RegistrationPage/registrationHead';
import RegistrationBtn from './components/RegistrationPage/registrationBtn';
import DeadlineRegister from './components/RegistrationPage/registrationContent'
import Footer from './components/Footer/footer';
import CountdownTimer from './components/HomePage/CountdownTimer';




const dateTimeTarget = new Date('February 2, 23 00:00:00 GMT+00:00').getTime();
const innerWidth = window.innerWidth;
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>

    <section id='HomePage'>
      <Nav />

      <Navbar />
      <Heading />

      <Subhead />
      <CountdownTimer targetDate={dateTimeTarget} />
      <FooterHome />

    </section>

    <section id='AboutPage'>
      <HeaderAbout />
      <HeadingAbout />
      <ContentAbout />
    </section>
    <section id='SpeakersPage'>
      <div className="box3">
        <SpeakersEventhead />

        <SpeakersCards />
      </div>

    </section>

    <section id='SchedulePage'>
      <ScheduleHead />
      <ScheduleContent />
    </section>
    <section id='DownloadPage'>
      <DownloadHead />
      <DownloadContent />
      <DownloadPng />
    </section>
    {/* <section id='SponsorsPage'>
      <SponsorsHead />
    </section> */}
    {/* <section id='FAQPage'>
      <FaqHead />
    </section> */}
    <section id='RegistrationPage'>
      <RegistrationHead />
      <DeadlineRegister />
      <RegistrationBtn />
    </section>
    <section id='Footer'>
      <Footer />
    </section>

  </>
);

