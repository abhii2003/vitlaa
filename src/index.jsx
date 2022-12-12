import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/nav';
import Heading from './components/heading';
import Subhead from './components/subhead';
import FooterHome from './components/footerHome';
import HeaderAbout from './components/HeaderAbout';
import HeadingAbout from './components/headingAbout';
import ContentAbout from './components/contentAbout';
import SpeakersEventhead from './components/speakersHead';
import SpeakersCards from './components/speakersCards';
import ScheduleHead from './components/scheduleHead';
import DownloadHead from './components/downloadHead';
import SponsorsHead from './components/sponsorsHead';
import FaqHead from './components/faqHead';
import RegistrationHead from './components/registrationHead';
import RegistrationBtn from './components/registrationBtn';
import DeadlineRegister from './components/registrationContent'
import Footer from './components/footer';
import DownloadPng from './components/downloadpng';
import DownloadContent from './components/downloadContent';
import ScheduleContent from './components/scheduleContent';
import CountdownTimer from './components/CountdownTimer';
import { Navbar } from "./components/navbar";




const dateTimeTarget = new Date('February 2, 23 00:00:00 GMT+00:00').getTime();
const innerWidth=window.innerWidth;
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  
    <section id='HomePage'>
      <App />
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
  
  