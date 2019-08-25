import React from 'react'

import LandingPage from './LandingPage';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Projects from './Projects'


export default function Main() {
    return (
        <div >
                <LandingPage />
                <AboutMe />
                <Projects />
                <ContactMe />
        </div>
    )
}
