import React from 'react';
import Heading from './heading';
import { Navbar } from './hamburger/navbar/index';
import Subhead from './subhead';
import CountdownTimer from './CountdownTimer';
import FooterHome from './footerHome';

export default function HomePage() {
    const dateTimeTarget = new Date('February 27, 23 09:00:00 GMT+05:30').getTime();

    return (

        <>
            <Navbar />
            <Heading />
            <Subhead />
            <CountdownTimer targetDate={dateTimeTarget} />
            <FooterHome />
        </>
    )


}