import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="navList">
          <li className="nav-items" id="Home">
            <NavLink
              to={{ pathname: "/home", hash: "#HomePage" }}
              className="navButton navText"
            >
              <button className="navButton">HOME</button>
            </NavLink>
          </li>

          <li className="nav-items" id="About">
            <NavLink
              to={{ pathname: "/home", hash: "#AboutPage" }}
              className="navButton navText"
            >
              <button className="navButton">ABOUT</button>
            </NavLink>
          </li>

          <li className="nav-items" id="Speakers">
            <NavLink
              to={{ pathname: "/home", hash: "#SpeakersPage" }}
              className="navButton navText"
            >
              <button className="navButton">SPEAKERS</button>
            </NavLink>
          </li>

          <li className="nav-items" id="Schedule">
            <NavLink
              to={{ pathname: "/home", hash: "#SchedulePage" }}
              className="navButton navText"
            >
              <button className="navButton">SCHEDULE</button>
            </NavLink>
          </li>

          <li className="nav-items" id="Download">
            <NavLink
              to={{ pathname: "/home", hash: "#DownloadPage" }}
              className="navButton navText"
            >
              <button className="navButton">DOWNLOAD</button>
            </NavLink>
          </li>

          {/* just type in sponsor in navText class a to enable the sponsors button  */}
          <li className="nav-items part2" id="Sponsors">
            <NavLink to="/team" className="navButton navText">
              <button className="navButton">TEAM</button>
            </NavLink>
          </li>
          {/* just type in sponsor in navText class a to enable the sponsors button  */}
          {/* <li className='nav-items' id='FAQs'>
                        <NavLink to="/#FAQPage">
                            <button className='navButton'><NavLink to="#FAQPage" className="navButton navText">

                            </NavLink></button></NavLink></li> */}

          <li className="nav-items" id="Registration">
            <NavLink
              to={{ pathname: "/home", hash: "RegistrationPage" }}
              className="navButton navText"
            >
              <button className="navButton">REGISTRATIONS</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
