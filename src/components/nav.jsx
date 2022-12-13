
import React from 'react';
const vitlogo= require("../image/favicon.ico");


export default function Nav() {
    return (
        
        
        <nav>
            <ul className='navList'>
                <li className='nav-items' id='Home'>
                    <a href="#HomePage"><button className='navButton'><a href="#HomePage" class="navText">HOME</a></button></a></li>

                <li className='nav-items' id='About'>
                    <a href="#AboutPage"><button className='navButton'><a href="#AboutPage" class="navText">ABOUT</a></button></a></li>

                <li className='nav-items' id='Speakers'>
                    <a href="#SpeakersPage"><button className='navButton'><a href="#SpeakersPage" class="navText">SPEAKERS</a></button></a></li>

                <li className='nav-items' id='Schedule'>
                    <a href="#SchedulePage"><button className='navButton'><a href="#SchedulePage" class="navText">SCHEDULE</a></button></a></li>

                <li className='nav-items' id='Download'>
                    <a href="#DownloadPage"><button className='navButton'><a href="#DownloadPage" class="navText">DOWNLOAD</a></button></a></li>


                    {/* logo can be updated from here */}
                    <li className='nav-items' id='vitlogo'>
                        <img src={vitlogo} alt="vitlogo" border="0" className='vitlogo'></img>
                    </li>




{/* just type in sponsor in navText class a to enable the sponsors button  */}
                <li className='nav-items part2' id='Sponsors'>
                    <a href="#SponsorPage"><button className='navButton'><a href="#SponsorPage" class="navText"></a></button></a></li>
{/* just type in sponsor in navText class a to enable the sponsors button  */}
                <li className='nav-items' id='FAQs'>
                    <a href="#FAQPage">
                        <button className='navButton'><a href="#FAQPage" class="navText"></a></button></a></li>

                <li className='nav-items' id='Registration'>

                    <a href="#RegistrationPage"><button className='navButton'><a href="#RegistrationPage" class="navText">REGISTRATIONS</a></button></a></li>
            </ul>
        </nav>
        
    );
}