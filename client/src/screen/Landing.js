import React from 'react'
import './Landing.css'
import Navbar from '../Components/Navbar';
// import '../Components/StartBrowsing'
import StartBrowsing from '../Components/StartBrowsing'
import Logo from '../Components/Logo'

export default function Landing() {
    return (
        <div className="mb-auto">
            <Logo />
            <StartBrowsing />
        </div>
    )
}
