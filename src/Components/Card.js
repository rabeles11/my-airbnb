import React from "react"
import Swimer from "../Images/Swimer.png"
import StartIcon from "../Images/StarIcon.png"
import "../Components/Card.css"

export default function Card() {
    return (
        <div className="CardBox">
            <img src={Swimer} className="ImgInCard"></img>
            <div className="TextBoxInCard">
                <img src={StartIcon} className="IconInCard"></img>
                <span>5.0 <span className="ColoredSpanText">(6) • USA</span></span>
            </div>
            <p>Life lesson with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}