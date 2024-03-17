import React from 'react'
import laptop from "../assets/laptop-img.png";
import mobile from "../assets/mobile-img.png";
import computers from "../assets/computer-img.png";

const Electronics = () => {
    return (
        <div>
            <p className="text-4xl font-extrabold mt-24 text-center">Electronics</p>

            <div className="grid grid-cols-3 mt-12 gap-7">
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Laptop</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={laptop} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Mobile</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={mobile} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Computers</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={computers} alt="shirt"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Electronics
