import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom Arrow components
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Slider {...settings} className="w-full mt-20">
            <div className="text-center text-white tracking-tighter">
                <p className="text-6xl font-bold font-sans">GET STARTED</p>
                <p className="text-6xl font-bold mt-8">YOUR FAVOURITE SHOPPING</p>

                <button className="px-8 py-3 bg-[#30302E] rounded-lg mt-20 hover:bg-[#F26522]">
                    <span className="text-xl font-bold">BUY NOW</span>
                </button>
            </div>
            <div className="text-center text-white tracking-tighter">
                <p className="text-6xl font-extrabold">GET STARTED</p>
                <p className="text-6xl font-extrabold mt-8">YOUR FAVOURITE SHOPPING</p>
            </div>
            <div className="text-center text-white tracking-tighter">
                <p className="text-6xl font-extrabold">GET STARTED</p>
                <p className="text-6xl font-extrabold mt-8">YOUR FAVOURITE SHOPPING</p>
            </div>
        </Slider>
    );
}

export default Carousel;
