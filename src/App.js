import React from "react"
import Navbar from "./Components/Navbar"
import Heroe from "./Components/Heroe"
import Card from "./Components/Card"

export default function App() {
    //<Heroe/>
    return (
        <div>
            <Navbar/>
            <Heroe/>
            <Card/>
        </div>
    )
}