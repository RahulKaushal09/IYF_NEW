import React from 'react';
import '../assets/css/Footer_new.css'; // Import the CSS file
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"; // Import icons
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="social-icon" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="social-icon" />
                    </a>
                </div>
                <nav className="footer-nav">
                    <a href="#our-inspiration">Our Inspiration</a>
                    <a href="#contact">Contact</a>
                    <a href="mailto:example@gmail.com">Gmail</a>
                    <a href="#about-us">About Us</a>
                    <a href="#quick-links">Quick Links</a>
                </nav>
            </div>
            <div className="footer-bottom">
                {/* <p>OUR INSPIRATION, CRAFTED WITH ♥ IN YOUR CITY</p> */}
                <p>© IYF 2025 | ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
};

export default Footer;