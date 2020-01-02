import React from 'react'
import './Landing.css'
import Navbar from '../Components/Navbar';
// import '../Components/StartBrowsing'
import StartBrowsing from '../Components/StartBrowsing'
import Logo from '../Components/Logo'
import Carousel from '../Components/Carousel'
export default function Landing() {
    return (
        <div className="mb-auto">
            <Logo />
            <StartBrowsing />
            <Carousel />
        </div>
    )
}
