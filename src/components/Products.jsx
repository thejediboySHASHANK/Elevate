import React from 'react'
import shirt from "../assets/dress-shirt-img.png"
import tshirt from "../assets/tshirt-img.png"
import womanDress from "../assets/women-clothes-img.png"

const Products = () => {
    return (
        <div>
            <p className="text-4xl font-extrabold mt-24 text-center">Man & Woman Fashion</p>

            <div className="grid grid-cols-3 mt-12 gap-7">
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Man T-shirt</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$30</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={tshirt} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Man shirt</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$30</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={shirt} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Woman Scart</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$30</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={womanDress} alt="shirt"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products
