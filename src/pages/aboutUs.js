import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/aboutUs.css";
import "../assets/css/main.css";
import introduction from "../assets/images/introduction.jpg";
import expansion from '../assets/images/expansion.jpg';
import yatra from '../assets/images/rath_yatra.jpg';
import teaching from '../assets/images/teaching.jpg';
import kirtan from '../assets/images/harinam-sankirtan3.jpg';
import current from '../assets/images/current.jpg';

const sections = [
    {
        id: 'who-we-are',
        title: 'Who We Are',
        text: "We're Navotsaah, a community dedicated to helping you find happiness and self-fulfillment in life. Whether you're looking to boost your motivation, concentration, self-confidence, or kindness, we've got your back.",
        imgSrc: introduction
    },
    {
        id: 'why-navotsaah',
        title: 'Why Navotsaah?',
        text: "There was a need to support young people facing challenges like addictions (drugs, social media & pornography), mental health issues (anxiety, depression), and a lack of spirituality. We believe in the power of spirituality and love to make a positive change in people's lives.",
        imgSrc: expansion
    },
    {
        id: 'our-values',
        title: 'Our Values',
        text: "We stand for Competence: striving for excellence in everything we do, Character: integrity and strong moral principles guide us, and Devotion: commitment to our mission and to each other.",
        imgSrc: yatra
    },
    {
        id: 'our-mission',
        title: 'Our Mission',
        text: "Navotsaah aims to empower individuals with spiritual and personal growth tools to navigate modern challenges. Through mentorship, workshops, and community engagement, we create a safe space for self-improvement.",
        imgSrc: teaching
    },
    {
        id: 'our-impact',
        title: 'Our Impact',
        text: "Through various initiatives, including counseling, outreach programs, and digital resources, we have helped numerous individuals regain confidence, overcome personal struggles, and lead a fulfilling life.",
        imgSrc: kirtan
    },
    {
        id: 'future-vision',
        title: 'Future Vision',
        text: "We envision expanding our reach to support more individuals globally through digital platforms, mentorship programs, and offline community centers, making a lasting difference in people's lives.",
        imgSrc: current
    }
];

function AboutUs() {
    return (
        <div className='about-container'>
            <div className="backgroundimg_about">
                <div className="center-content">
                    <h1>About Navotsaah</h1>
                </div>
            </div>
            <div className='content-container'>
                <Container>
                    {sections.map(({ id, title, text, imgSrc }, index) => (
                        <Row key={id} className="align-items-center section-row">
                            {index % 2 === 0 ? (
                                <>
                                    <Col md={6}>
                                        <img src={imgSrc} alt={title} className="img-fluid" id={id} />
                                    </Col>
                                    <Col md={6}>
                                        <h2 className="section-title">{title}</h2>
                                        <p className="textleft" >{text}</p>
                                    </Col>
                                </>
                            ) : (
                                <>
                                    <Col md={6}>
                                        <h2 className="section-title">{title}</h2>
                                        <p className="textright">{text}</p>
                                    </Col>
                                    <Col md={6}>
                                        <img src={imgSrc} alt={title} className="img-fluid" id={id} />
                                    </Col>
                                </>
                            )}
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;
