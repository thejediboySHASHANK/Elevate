import React from 'react'
import {Link} from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <header className="flex justify-center header_section_top text-white mb-8 gap-4 p-3">
            <div className="cursor-pointer">Best Sellers</div>
            <div className="border-l border-gray-300 h-8"></div>
            <div className="cursor-pointer">Gift Ideas</div>
            <div className="border-l border-gray-300 h-8"></div>
            <div className="cursor-pointer">New Releases</div>
            <div className="border-l border-gray-300 h-8"></div>
            <div className="cursor-pointer">Today's Deals</div>
            <div className="border-l border-gray-300 h-8"></div>
            <div className="cursor-pointer">Customer Service</div>
        </header>
    )
}
export default Navbar
