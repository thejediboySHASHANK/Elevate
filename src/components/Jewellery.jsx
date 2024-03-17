import React from 'react'
import jhumkas from "../assets/jhumka-img.png";
import necklaces from "../assets/neklesh-img.png";
import kangans from "../assets/kangan-img.png";

const Jewellery = () => {
    return (
        <div>
            <p className="text-4xl font-extrabold mt-24 text-center">Jewellery Accessories</p>

            <div className="grid grid-cols-3 mt-12 gap-7">
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Jhumkas</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={jhumkas} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Necklaces</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={necklaces} alt="shirt"/>
                    </div>
                </div>
                <div className="text-center border border-gray-200 shadow-xl flex flex-col items-center">
                    <p className="font-bold text-lg mt-5">Kangans</p>
                    <p className="text-md font-semibold text-orange-500 mt-2">Price <span className="text-black ml-3">$100</span></p>

                    <div className="mt-4 flex justify-center items-center w-full h-auto p-4"> {/* Adjust padding as needed */}
                        <img className="object-contain h-auto max-w-full" src={kangans} alt="shirt"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jewellery
