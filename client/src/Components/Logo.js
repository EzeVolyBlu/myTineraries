import React from 'react'
import logo from '../img/MYtineraryLogo.png'


export default function Logo() {
    return (
        
        <div>

            <div className="d-flex justify-content-center my-4">
            
                <img className="logo" src={logo} alt="mytinerary-logo" />

            </div>

                <p className="font-italic style-text px-4 pb-2">Find your perfect trip, designed by insiders 
                    who know and love their cities </p>
        </div>
        
    )
}
