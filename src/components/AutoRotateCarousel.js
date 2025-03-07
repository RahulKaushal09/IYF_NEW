import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your images
import slide1 from '../assets/images/update/Website Banner/Carousal 1.png';
import slide2 from '../assets/images/update/Website Banner/Carousal 2.png';
import slide3 from '../assets/images/update/Website Banner/Carousal3.png';

const AutoRotateCarousel = () => {
    const [index, setIndex] = useState(0);

    const slides = [
        {
            src: slide1,
            alt: 'Seminar Speaker',
            caption: 'Seminar Series 2025'
        },
        {
            src: slide2,
            alt: 'Slide 2',
            caption: 'Professional Development'
        },
        {
            src: slide3,
            alt: 'Slide 3',
            caption: 'Leadership Training'
        }
    ];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // Auto-rotation logic to change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null} // We handle rotation manually with useEffect, so set this to null
            controls={true}
            indicators={false}
            style={{ animation: "none" }}
        >
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ objectFit: 'cover' }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default AutoRotateCarousel;