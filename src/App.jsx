import Navbar from "./components/Navbar.jsx";
import "./App.css"
import Navbar2 from "./components/Navbar2.jsx";
import banner from "./assets/banner-bg.png"
import React from "react";

import "./styles/carousel.css"
import Carousel from "./components/carousel.jsx";
import Products from "./components/Products.jsx";
import Electronics from "./components/Electronics.jsx";
import Jewellery from "./components/Jewellery.jsx";

function App() {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '90vh', width: '100%' }}>
            <div className="px-32">
                <Navbar />
                <p className="text-4xl text-white font-extrabold text-center">Eflyer</p>
                <Navbar2 />
                <Carousel />
                <Products />
                <Electronics />
                <Jewellery />
            </div>
        </div>
  )
}

export default App
