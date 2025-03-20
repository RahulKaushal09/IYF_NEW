/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/css/main.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowTrendUp,
    faUserGroup,
    faStar,
    faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import Donate from "./Donate/index.js";
import Footer from '../components/footer_old.js';
import AutoRotateCarousel from "../components/AutoRotateCarousel.js";
import Card from 'react-bootstrap/Card';
// import { useNavigate } from "react-router-dom";
import courseImage from "../assets/images/update/Website Banner/Courses.png";
import youthFesImage from "../assets/images/update/Website Banner/Youth Fest.png";
import Gallery from "../components/Gallery.js";
import {
    Routes,
    Route,
    BrowserRouter as Router,
    useNavigate,
} from "react-router-dom";

const Home = ({ updateHighlight }) => {
    const ActiveValue = 11;
    const SessionsValue = 500;
    const ConferencesValue = 1000;

    const [Active, setActive] = useState(0);
    const [Sessions, setSession] = useState(0);
    const [Conferences, setConferences] = useState(0);

    useEffect(() => {

        let intervalId1;
        let intervalId2;
        let intervalId3;

        if (Active < ActiveValue) {
            const step = (ActiveValue / 1000) * 10;
            intervalId1 = setInterval(() => {
                setActive((prevCount) => prevCount + step);
            }, 10);
        }

        if (Sessions < SessionsValue) {
            const step = (SessionsValue / 1000) * 10;
            intervalId2 = setInterval(() => {
                setSession((prevCount) => prevCount + step);
            }, 10);
        }

        if (Conferences < ConferencesValue) {
            const step = (ConferencesValue / 1000) * 10;
            intervalId3 = setInterval(() => {
                setConferences((prevCount) => prevCount + step);
            }, 10);
        }

        // Clear the intervals when the component unmounts or the endValue is reached
        return () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            clearInterval(intervalId3);
        };
    }, [
        Active,
        setActive,
        Conferences,
        setConferences,
        Sessions,
        SessionsValue,
        setSession,
    ]);
    const goalsData = [
        "Gaining happiness and self-fulfillment in the life",
        "Finding the internal potential such as motivation, concentration, tolerance, self-confidence, and kindness.",
        "Combining personality with proficiency for long-term success.",
        "Securing youngsters from self-destructive addictions that harm mind and body.",
        "Provide soft-skill training like leadership, stress management, time management etc.",
        "Provide a sense of balancing between personal and professional life, work and entertainment.",
        "Provide scientifically crafted lectures on Vedic intelligence by the highly qualified faculty members.",
    ];

    const activitiesData = [
        {
            title: "Informative lectures",
            description:
                "Bringing the hidden potential out in the youth for creating the virtues of self-confidence and motivation through informative and vibrant presentations and lectures.",
        },
        {
            title: "Art & Drama",
            description:
                "Cultivating the skills of the youth in the art, music, and drama field by giving them proper opportunities and required assistance.",
        },
        {
            title: "Presentation and communication skills",
            description:
                "Improving the communication skills of the youth with the help of PPT (Power Point Presentations) and several debate competitions.",
        },
        {
            title: "Practical engagement",
            description:
                "We provide activities such as event management, book distribution, Prasad distribution, cleaning, and so on. These activities are very helpful in building better leadership and team-building skills. They also create a great sense of responsibility in students.",
        },
    ];

    const navigate = useNavigate();

    const navigateToDonate = () => {
        // 👇️ navigate to /contacts
        navigate("/donate");
        updateHighlight();
    };
    return (
        <div className="home-container">
            <div className="carouselDiv">
                <AutoRotateCarousel />
            </div>

            <div className="content-container">
                <div style={{ width: "100%", display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <div className="row" style={{ width: "80%", alignItems: "center" }}>
                        <div className="counter-div  col-lg-4">
                            <p className="counter">{Math.round(Active)} +</p>
                            <h2 className="counter-heading">Youth Centres</h2>
                            {/* <p className="counter-def">
                            Join a thriving community of over 500 dedicated youth members
                            actively engaging in discussions, events, and service projects.
                        </p> */}
                        </div>

                        <div className=" counter-div  col-lg-4">
                            <p className="counter">{Math.round(Sessions)} +</p>
                            <h2 className="counter-heading">Youths Transformed</h2>
                            {/* <p className="counter-def">
                            Experience over 1000 dynamic sessions designed to deepen your
                            spiritual understanding, enhance your skills, and foster
                            meaningful connections.
                        </p> */}
                        </div>
                        <div className="  col-lg-4">
                            <p className="counter">{Math.round(Conferences)} +</p>
                            <h2 className="counter-heading">Seminars and Sessions</h2>
                            {/* <p className="counter-def">
                            Participate in our annual conferences, featuring workshops,
                            seminars, and keynote speakers, creating opportunities for
                            personal growth and collective inspiration
                        </p> */}
                        </div>
                    </div>
                </div>
                <div className="second-section">
                    <div className="row">
                        <div className="card_ col-lg-3">
                            <div className="card-main ">
                                <h2>
                                    What We Do?
                                </h2>
                                <p>
                                    We envision a community where young minds are nurtured in the
                                    teachings of Lord Krishna, cultivating leadership qualities to
                                    serve humanity with compassion and wisdom.
                                </p>
                            </div>
                        </div>
                        <div class="container_cards col-lg-6">
                            <div class="grid-1 callout alert">
                                <div
                                    style={{
                                        textAlign: "left",

                                        height: "40px",
                                        color: "rgb(26, 115, 232)",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowTrendUp} />
                                </div>
                                <h3 style={{}}>Spiritual Growth</h3>
                                <p>
                                    Clarify our doubts regarding our own existence/dharma

                                </p>
                            </div>

                            <div class="grid-2 callout alert">
                                <div
                                    style={{
                                        textAlign: "left",

                                        height: "40px",
                                        color: "rgb(26, 115, 232)",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faUserGroup} />
                                </div>
                                <h3 style={{}}>Support</h3>
                                <p>
                                    Personal Guidance, Skill Development and Career Guidance, we're here for you.

                                </p>
                            </div>

                            <div class="grid-3 callout alert">
                                <div
                                    style={{
                                        textAlign: "left",

                                        height: "40px",
                                        color: "rgb(26, 115, 232)",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <h3 style={{}}>Exposure & Experience</h3>
                                <p>
                                    Youth Festivals, Charity Programs and Socialization.
                                </p>
                            </div>

                            <div class="grid-4 callout alert">
                                <div
                                    style={{
                                        textAlign: "left",

                                        height: "40px",
                                        color: "rgb(26, 115, 232)",
                                    }}
                                >
                                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                                </div>
                                <h3 style={{}}>Holistic Growth</h3>

                                <p>
                                    We help you find a balance between personal and professional life, work, and entertainment through the knowledge of Vedic Scriptures.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-section" style={{ textAlign: 'left', width: '80%', margin: 'auto' }}>
                    <h2>Ongoing / Future Programs</h2>

                    <div className="d-flex flex-wrap gap-3 mb-5 mt-4 ms-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={courseImage} alt="Courses 1" />
                            <Card.Body>
                                <Card.Title>Courses</Card.Title>
                                {/* <Card.Text>
                                    Enhance your skills with our comprehensive professional development program.
                                </Card.Text> */}
                                {/* <a href="#" className="btn btn-primary">Learn More</a> */}
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={youthFesImage} alt="Courses 2" />
                            <Card.Body>
                                <Card.Title>Youth Festivals</Card.Title>
                                {/* <Card.Text>
                                    Build leadership skills with our interactive training sessions.
                                </Card.Text> */}
                                {/* <a href="#" className="btn btn-primary">Learn More</a> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <h2>Our Programs </h2>
                    <Gallery />
                    <h2 style={{ marginTop: "50px" }}>Testimonials</h2>
                    <div style={{ width: "100%", margin: "0 auto 50px" }}>
                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                                src="https://www.youtube.com/embed/teGMjIKo6Ss"
                                title="Kurukshetra One day Retreat - Glimpses"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div class="hero-section-cta">
                        <div class="call-to-action-cta">
                            <h1>Call to Action - Join Us!</h1>
                            <p>We'd love for you to be a part of our journey!</p>
                            <div class="buttons-cta">
                                <button class="btn-cta btn-yellow-cta">Youth Patron</button>
                                <button class="btn-cta btn-green-cta">Volunteer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Home;
