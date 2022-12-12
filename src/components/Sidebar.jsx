import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      
      <a className="menu-item" href="#HomePage">
        
        Home
       
      </a>
      <a className="menu-item" href="#AboutPage">
        About
      </a>
      <a className="menu-item" href="#SpeakersPage">
        Speaker
      </a>
      <a className="menu-item" href="#SchedulePage">
        Schedule
      </a>
      <a className="menu-item" href="#DownloadPage">
        Downloads
      </a>
      <a className="menu-item" href="#SponsorPage">
        Sponsors
      </a>
      <a className="menu-item" href="#FAQPage">
        FAQ's
      </a>
      <a className="menu-item" href="/#RegistrationPage">
        Registration
      </a>
      

    </Menu>
  );
};