import React from "react"
import './index.css'
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interest"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">
            <Info />
            <main>
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}

export default App
