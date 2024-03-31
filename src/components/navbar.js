import React, { useState, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Import NavLink

import '../assets/css/navbar.css'; // Make sure to import your CSS for custom styling
import logo from "../assets/images/logo_without_bg.png"
const NavbarGlobal = ({ updateHighlight, highlightStyle }) => {

    const navRef = useRef(null);
    // const [highlightStyle, setHighlightStyle] = useState({});

    // const updateHighlight = (e) => {
    //     // Calculate the position and size of the highlight based on the clicked tab
    //     const { offsetLeft, offsetWidth } = e.target;
    //     const newStyle = {
    //         left: offsetLeft + 'px',
    //         width: offsetWidth + 'px',
    //     };
    //     setHighlightStyle(newStyle);
    // };



    return (
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
            <Container ref={navRef}>
                <Navbar.Brand style={{ display: "flex", justifyContent: "center", alignItems: "center" }} href="#home">
                    <img
                        src={logo} // Adjust the path to where your logo is stored
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Brand Logo"

                    />{' '}
                    ISKCON Youth Forum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" onClick={updateHighlight}>
                        <NavLink to="/home" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
                        <NavLink to="/About" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
                        <NavLink to="/donate" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Donate</NavLink>
                        <NavLink to="/signIn" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Sign</NavLink>
                        {/* 
                        <Nav.Link href="#home" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => navigationTo('/home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => navigationTo('/about')}>About Us</Nav.Link>
                        <Nav.Link href="#contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => navigationTo('/contact')}>Contact</Nav.Link>
                        <Nav.Link href="#donate" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => navigationTo('/donate')}>Donate</Nav.Link>
                        <Nav.Link href="#signIn" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={() => navigationTo('/signIn')}>Sign In</Nav.Link> */}
                        <div className="highlight" style={highlightStyle}></div> {/* Highlight Element */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarGlobal;
