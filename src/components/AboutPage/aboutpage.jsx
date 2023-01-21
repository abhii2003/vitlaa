import React from 'react';
import HeaderAbout from './HeaderAbout';
import HeadingAbout from './headingAbout';
import ContentAbout from './contentAbout';

export default function AboutPage() {
    return (
        <>
            <section className='page /home/about' id='AboutPage'>
                <HeaderAbout />
                <HeadingAbout />
                <ContentAbout />
            </section>
        </>
    )
}
