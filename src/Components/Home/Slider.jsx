import 'react-awesome-slider/dist/styles.css';
import { Carousel } from 'flowbite-react';

import banner1 from '../../assets/banners/banner 1.png';
import banner2 from '../../assets/banners/banner 2.png';
import banner3 from '../../assets/banners/banner 3.png';
import banner4 from '../../assets/banners/banner 4.png';
import banner5 from '../../assets/banners/banner 5.png';
import { Link } from 'react-router-dom';

export default function Slider() {
    const slides = [
        {
            banner: banner1,
            title: "Find Your Perfect Apartment"
        },
        {
            banner: banner2,
            title: "Explore Modern Living Spaces"
        },
        {
            banner: banner3,
            title: "Discover Your Dream Home"
        },
        {
            banner: banner4,
            title: "Affordable Apartments in Prime Locations"
        },
        {
            banner: banner5,
            title: "Book a Tour of Our Apartments"
        },
    ];

    return (
        <div className="relative h-[70vh]">
            <Carousel slideInterval={2500}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-full ">
                        <img
                            src={slide.banner}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className=" md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold bg-opacity-60 bg-black text-center p-3 rounded-md">
                            {slide.title}
                        </div>
                        <Link to={"/apartment"} className=' md:block absolute top-2/3 left-1/2 -translate-x-1/2 text-center text-white text-xl font-semibold bg-opacity-60 bg-black p-3 rounded-md'> Explore Now</Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
