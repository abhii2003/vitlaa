import React from 'react';
import { Navbar } from './hamburger/navbar/index';
import Heading from './heading';
import Subhead from './subhead';
import CountdownTimer from './CountdownTimer';
import FooterHome from './footerHome';

export default function HomePage() {
    const dateTimeTarget = new Date('February 2, 23 00:00:00 GMT+00:00').getTime();

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