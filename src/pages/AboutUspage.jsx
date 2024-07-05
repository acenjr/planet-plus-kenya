import React from 'react'
import { AboutUs, Board, Description, Footer, Founder, History, Navbar, Team } from '../components'

const AboutUspage = () => {
    return (
        <div>
            <Navbar />
            <Description />
            <History />
            <AboutUs />
            <Founder />
            <Board />
            <Team />
            <Footer />
        </div>
    )
}

export default AboutUspage