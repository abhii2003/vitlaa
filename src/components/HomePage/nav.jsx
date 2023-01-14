import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';






export default function Nav() {
    return (

        <div className='nav-container'>

            <nav>
                <ul className='navList'>
                    <li className='nav-items' id='Home'>
                        <NavLink to={{ pathname: "/home", hash: "#HomePage" }} ><button className='navButton'><NavLink to={{ pathname: "/home", hash: "#HomePage" }} className="navButton navText">
                            HOME
                        </NavLink></button></NavLink></li>

                    <li className='nav-items' id='About'>
                        <NavLink to={{ pathname: "/home", hash: "#AboutPage" }}  ><button className='navButton'><NavLink to={{ pathname: "/home", hash: "#AboutPage" }} className="navButton navText" >
                            ABOUT
                        </NavLink></button></NavLink></li>

                    <li className='nav-items' id='Speakers'>
                        <NavLink to={{ pathname: "/home", hash: "#SpeakersPage" }}><button className='navButton'><NavLink to={{ pathname: "/home", hash: "#SpeakersPage" }} className="navButton navText">
                            SPEAKERS
                        </NavLink></button></NavLink></li>

                    <li className='nav-items' id='Schedule'>
                        <NavLink to={{ pathname: "/home", hash: "#SchedulePage" }}><button className='navButton'><NavLink to={{ pathname: "/home", hash: "#SchedulePage" }} className="navButton navText">
                            SCHEDULE
                        </NavLink></button></NavLink></li>

                    <li className='nav-items' id='Download'>
                        <NavLink to={{ pathname: "/home", hash: "#DownloadPage" }}><button className='navButton'><NavLink to={{ pathname: "/home", hash: "#DownloadPage" }} className="navButton navText">
                            DOWNLOAD
                        </NavLink></button></NavLink></li>




                    {/* just type in sponsor in navText class a to enable the sponsors button  */}
                    <li className='nav-items part2' id='Sponsors'>
                        <NavLink to="/team" ><button className='navButton'><NavLink to="/team" className="navButton navText">
                            TEAM
                        </NavLink></button></NavLink></li>
                    {/* just type in sponsor in navText class a to enable the sponsors button  */}
                    <li className='nav-items' id='FAQs'>
                        <NavLink to="/#FAQPage">
                            <button className='navButton'><NavLink to="#FAQPage" className="navButton navText">

                            </NavLink></button></NavLink></li>

                    <li className='nav-items' id='Registration'>

                        <NavLink to={{ pathname: "/home", hash: "RegistrationPage" }}><button className='navButton'><NavLink to={{ pathname: "/home", hash: "RegistrationPage" }} className="navButton navText">
                            REGISTRATIONS
                        </NavLink></button></NavLink></li>
                </ul>
            </nav>

        </div >
    );
}