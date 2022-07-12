import React from "react"
import './Navbar.css';
import AirBNBLogo from "../Images/Vector.png"


export default function Navbar() {
    return (
        <nav className="Navbar">
            <img className="ImgAirBNB" src={AirBNBLogo}></img>
        </nav>
    )
}