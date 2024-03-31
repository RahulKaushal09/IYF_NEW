/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/css/main.css";
import React, { useEffect, useState } from 'react';
// import logo_white from "../assets/images/whitelogo.jpg"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed)

    };

    const test = () => {
        const tabsNewAnim = document.getElementById("navbarSupportedContent");
        if (!tabsNewAnim) {
            return; // Guard to ensure tabsNewAnim exists
        }
        const activeItemNewAnim = tabsNewAnim.querySelector(".active");
        if (!activeItemNewAnim) {
            return; // Guard to ensure activeItemNewAnim exists
        }
        const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
        const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
        const itemPosNewAnimTop = activeItemNewAnim.getBoundingClientRect().top + window.scrollY;
        const itemPosNewAnimLeft = activeItemNewAnim.getBoundingClientRect().left + window.scrollX;
        const horiSelector = document.querySelector(".hori-selector");
        const navbarBrand = document.querySelector(".navbar-brand");
        let brandLeft = navbarBrand ? navbarBrand.getBoundingClientRect().right + window.scrollX : 0;
        let brandTop = navbarBrand ? navbarBrand.getBoundingClientRect().top + window.scrollY : 0;

        if (isNavCollapsed) {
            brandTop = 0;
        }
        else {
            brandTop = brandLeft;
            brandLeft = 0;
        }
        console.log(isNavCollapsed);
        horiSelector.style.top = itemPosNewAnimTop - brandTop + "px";
        horiSelector.style.left = itemPosNewAnimLeft - brandLeft + "px"; // Subtract the brand's left position
        horiSelector.style.height = activeWidthNewAnimHeight + "px";
        horiSelector.style.width = activeWidthNewAnimWidth + "px";

    };

    const handleTabClick = (tabName) => () => {
        setActiveTab(tabName);
    };
    useEffect(() => {
        const handleResize = () => {
            // Assume 992px is the breakpoint for collapsing the navbar
            const isMobileView = window.innerWidth < 992;
            setIsNavCollapsed(!isMobileView);
        };

        // Call handleResize on component mount to set the initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        test();
    }, [activeTab]); // Run test when activeTab or isNavCollapsed changes
    useEffect(() => {
        test();
    }, [isNavCollapsed]); // Run test when activeTab or isNavCollapsed changes


    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="#">
                {/* <img src={logo_white} alt="IYF" style={{
                }}></img> */}
            </a>
            <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    {['Home', 'About', 'Contact', 'Donate', 'Sign'].map(tabName => (
                        <li key={tabName} className={`nav-item ${activeTab === tabName ? 'active' : ''}`} onClick={handleTabClick(tabName)}>
                            <a className="nav-link">
                                <i className="fas fa-tachometer-alt"></i>{tabName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;