import React from 'react';
import HomePage from './components/HomePage/homepage';
import AboutPage from './components/AboutPage/aboutpage';
import SpeakersPage from './components/SpeakersPage/speakerspage';
import SchedulePage from './components/SchedulePage/schedulepage';
import DownloadPage from './components/DownloadPage/downloadpage';
import RegistrationPage from './components/RegistrationPage/registrationpage';


export default function AllSections() {



    return (

        <div>


            <section className='page' id='HomePage' >
                <HomePage />

            </section>


            <AboutPage />


            <section className='page' id='SpeakersPage'>
                <SpeakersPage />
            </section>

            <section className='page' id='SchedulePage'>
                <SchedulePage />
            </section>

            <section className='page' id='DownloadPage'>
                <DownloadPage />
            </section>

            {/* <section className='page' id='SponsorsPage'>
        <SponsorsHead />
    </section> */}
            {/* <section className='page' id='FAQPage'>
        <FaqHead />
    </section> */}

            <section className='page' id='RegistrationPage'>
                <RegistrationPage />
            </section>




        </div>

    )

}