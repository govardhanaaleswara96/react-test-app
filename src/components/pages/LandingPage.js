import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className=" main-title text-center text-dark">User Rating Application</h1>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="btn btn-success btn-lg">log in</button>
                </Link>
                <Link to="/register">
                    <button className="btn btn-primary btn-lg">register</button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}