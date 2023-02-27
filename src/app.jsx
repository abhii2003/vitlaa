import React from "react";
import AllSections from "./AllSections";
import Team from "./components/Team/team";
import RegistrationPage from "./components/RegistrationPage/registrationpage";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/HomePage/nav";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";
import ParticipantsPage from "./components/ParticipantsPage/participantspage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<AllSections />} />
          <Route exact path="/home" element={<AllSections />} />
          <Route path="/team" element={<Team />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/participants" element={<ParticipantsPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
