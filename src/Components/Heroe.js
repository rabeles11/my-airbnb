import React from "react"
import HeroeImg from "../Images/HeroeImage.png"
import './Heroe.css';

export default function Heroe() {
    return (
        <section className="HeroeSection">
            <img className="HeroeImage" src={HeroeImg}></img>
            <h1 className="HeroeH1">Online Experiences</h1>
            <p className="HeroeP">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}