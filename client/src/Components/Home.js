import home from '../img/homeIcon.png'
import { Link } from 'react-router-dom';


import React from 'react'

export default function Home() {
    return (
        <div className="mx-auto mb-2">
            <Link to="/">
                <img src={home} alt="home" className="home-ico"/>
            </Link>
        </div>
    )
}

