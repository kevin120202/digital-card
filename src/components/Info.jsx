import React from "react"
import '../index.css'

const Info = () => {
    return (
        <div className="info-container">
            <img src="./images/kevin-claud-pic.jpeg" alt="Picture of Kevin" className="profile-img" />
            <h1>Kevin Dela Paz</h1>
            <h3>Software Engineer</h3>
            <p>Portfolio Website</p>
            <div className="links-container">
                <a href="/" className="email links">Email</a>
                <a href="/" className="linkedIn links">LinkedIn</a>
            </div>
        </div>
    )
}

export default Info