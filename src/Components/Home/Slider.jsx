import { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import banner1 from '../../assets/banners/banner 1.png';
import banner2 from '../../assets/banners/banner 2.png';
// import banner3 from '../../assets/banners/banner 3.png';
// import banner4 from '../../assets/banners/banner 4.png';
// import banner5 from '../../assets/banners/banner 5.png';
// import banner6 from '../../assets/banners/banner 6.png';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';


export default function Slider() {
    const slides = [
        {
            banner: banner1,
            title: "Welcome to our website",
        },
        {
            banner: banner2,
            title: "Play Games",
        },
        // {
        //     banner: banner3,
        //     title: "Enjoy Games",
        //     description: "Lose yourself in immersive gameplay with exciting features and challenges.",
        // },
        // {
        //     banner: banner4,
        //     title: "Find Interesting Games",
        //     description: "Discover unique and exciting games to match your style and interests.",
        // },
        // {
        //     banner: banner5,
        //     title: "Share Game Reviews",
        //     description: "Be part of our community by sharing reviews and helping others choose their next favorite game.",
        // },
        // {
        //     banner: banner6,
        //     title: "Explore Our Site",
        //     description: "Dive deep into our site to uncover everything it has to offer for gamers.",
        // },
    ];

    return (
        <div className="h-[70vh]">
            <Carousel slideInterval={2200}>
                {
                    slides.map(slide => {
                        return <img src={slide.banner} alt={slide.title} key={slide.banner} />
                    })
                }
            </Carousel>
        </div>
    );
}