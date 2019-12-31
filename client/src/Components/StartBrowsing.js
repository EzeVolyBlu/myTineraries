import React from 'react'
import { Link } from 'react-router-dom';
import startBrowsing from '../img/circled-right-2.png'
import './styles.css'

export default function StartBrowsing() {
    return (
        <div className="mt-4 d-flex justify-content-center">
            <Link to="/cities" className="">

                <img className="start-browsing" src={startBrowsing} alt="start-browsing" />
    
            </Link>
        </div>
    )
}
