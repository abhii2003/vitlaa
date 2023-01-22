import React from "react";
import AllSections from "./AllSections";
import Team from "./components/Team/team";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/HomePage/nav";
import Footer from "./components/Footer/footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<AllSections />} />
          <Route exact path="/home" element={<AllSections />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
