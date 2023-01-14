import React from 'react';
import Team from './components/Team/team';
import { Route, Routes } from 'react-router-dom';
import AllSections from './AllSections';
import Nav from './components/HomePage/nav';
import Footer from './components/Footer/footer';
import HomePage from './components/HomePage/homepage';
import AboutPage from './components/AboutPage/aboutpage';
import SpeakersPage from './components/SpeakersPage/speakerspage';
import SchedulePage from './components/SchedulePage/schedulepage';
import DownloadPage from './components/DownloadPage/downloadpage';
import RegistrationPage from './components/RegistrationPage/registrationpage';


export default function App() {
    return (

        <>

            <Nav />



            <Routes>

                <Route exact path="/home" element={<AllSections />} />
                <Route path="/team" element={<Team />} />





            </Routes>


            <Footer />



        </>

    )
}