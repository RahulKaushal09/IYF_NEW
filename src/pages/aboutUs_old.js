import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/aboutUs.css"
import "../assets/css/main.css"
import introduction from "../assets/images/introduction.jpg"
import expansion from '../assets/images/expansion.jpg'
import yatra from '../assets/images/rath_yatra.jpg'
import teaching from '../assets/images/teaching.jpg'
import kirtan from '../assets/images/harinam-sankirtan3.jpg'
import current from '../assets/images/current.jpg'
// import Footer from '../components/footer_old';
// Sample data for sections
const sections = [
    {
        id: 'introduction',
        title: 'Introduction',
        text: "The International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement, was established in 1965 by A.C. Bhaktivedanta Swami Prabhupada. It is part of the Gaudiya Vaishnava tradition, a subset of Hinduism that dates back thousands of years. ISKCON was founded to spread the practice of bhakti yoga, where devotees (bhaktas) dedicate their thoughts and actions towards pleasing the Supreme Lord, Krishna. This spiritual movement aims to promote the well-being of society by teaching the science of Krishna consciousness according to Bhagavad-Gita and other ancient scriptures.",
        imgSrc: introduction
    },
    {
        id: 'beginning',
        title: 'The Beginning',
        text: "In July 1965, at the age of 69, Srila Prabhupada embarked on a monumental journey from Kolkata, India, to New York City with just a few dollars and a case of books. This marked the humble beginning of what would soon become a global spiritual phenomenon. Prabhupada's early days in the United States were challenging; he faced hardships, financial struggles, and the daunting task of conveying his ancient spiritual tradition to a Western audience. Despite these obstacles, his unwavering determination and deep faith in Krishna's teachings led to the establishment of the first ISKCON temple in a small rented space in New York City in 1966. This event symbolized the planting of the seed for a vast spiritual tree whose branches would eventually spread across the globe.",
        imgSrc: 'https://iskcondwarka.org/wp-content/uploads/2022/06/EXTERNAL-Disappearance-Day-of-Sri-Mukunda-Datta.jpg'
    },
    {
        id: 'expansion',
        title: 'Expansion of ISKCON',
        text: "Following the establishment of its first temple, ISKCON experienced rapid growth. Srila Prabhupada's compelling teachings and charismatic leadership attracted a diverse group of followers, including intellectuals, artists, and young seekers. By the late 1960s and early 1970s, new temples had been inaugurated in major cities across the United States and abroad, including San Francisco, London, Paris, and Moscow. This period also saw the inception of the Rath-Yatra festivals outside India, starting in San Francisco, symbolizing ISKCON's commitment to sharing its vibrant culture and spirituality with the world.",
        imgSrc: expansion
    },
    {
        id: 'rath-yatra',
        title: 'Rath-Yatra Festival',
        text: "The Rath-Yatra, or the Festival of Chariots, is one of ISKCON's most celebrated and visible public events. It commemorates Lord Krishna's return to Vrindavan and has been celebrated annually in Jagannath Puri, India, for centuries. ISKCON's first Rath-Yatra in San Francisco in 1967 marked a significant milestone, bringing this ancient tradition to the streets of a major Western city. The festival's success led to Rath-Yatra celebrations in cities worldwide, attracting thousands of participants who are drawn to the colorful chariots, joyful music, and spirited dancing.",
        imgSrc: yatra
    },
    {
        id: 'literature',
        title: 'Contribution to Vedic Literature',
        text: "Under Srila Prabhupada's guidance, ISKCON has made significant contributions to the field of Vedic literature. Prabhupada himself translated and provided commentary for over seventy Vedic texts, making these profound teachings accessible to a global audience. Among his most notable contributions are the multi-volume 'Srimad Bhagavatam', 'Bhagavad-Gita As It Is', and 'Caitanya Caritamrita'. These works are considered foundational texts within ISKCON, encapsulating the essence of Krishna consciousness and offering practical guidance for devotees.",
        imgSrc: 'https://www.iskconmysore.org/wp-content/uploads/2022/11/Srila-Prabhupada-books-768x432.jpg'
    },
    {
        id: 'philosophy',
        title: 'Philosophy and Teachings',
        text: "ISKCON's philosophy is deeply rooted in the Bhagavad-Gita and Bhagavata Purana, focusing on the devotion (bhakti) towards the Supreme Personality of Godhead, Sri Krishna. Central to ISKCON's teachings is the practice of mantra meditation, specifically the chanting of the Hare Krishna mantra. This practice is believed to cleanse the heart and bring about a state of peace and spiritual realization. Additionally, ISKCON advocates for a disciplined lifestyle that includes vegetarianism, abstinence from intoxicants, and the study of sacred texts. Through its teachings, ISKCON aims to foster a sense of unity and peace among all beings, advocating for a life of simplicity, humility, and service.",
        imgSrc: teaching
    },
    {
        id: 'global-influence',
        title: 'Global Influence and Humanitarian Efforts',
        text: "ISKCON has established a significant presence worldwide, with temples and communities in over a hundred countries. Beyond its spiritual teachings, ISKCON is known for its global humanitarian efforts, particularly through the Food for Life program, which provides free meals to those in need. This outreach is part of ISKCON's belief in 'prasadam', sanctified food that has been offered to Krishna, which nourishes the body and the soul. Through its diverse initiatives, ISKCON continues to impact global spirituality and humanitarianism, promoting messages of love, compassion, and unity.",
        imgSrc: kirtan
    },
    {
        id: 'current-status',
        title: 'Current Status',
        text: "Today, ISKCON stands as a vibrant, global community, with hundreds of temples, farm communities, educational institutions, and cultural centers. It remains committed to its core mission of spreading the teachings of Krishna consciousness and fostering a spiritual awakening among individuals. Despite facing challenges and controversies, ISKCON's influence in the realms of religion, culture, and social welfare is undeniable. As it moves forward, ISKCON continues to adapt, embracing the opportunities and challenges of the 21st century while staying true to its ancient spiritual heritage.",
        imgSrc: current
    }
];



function AboutUs() {
    return (
        <div className='about-container'>
            <div className="backgroundimg_about">
                <div className="center-content">

                </div>
            </div>
            <div className='content-container'>

                <div className='row' style={{ width: "80%" }}>
                    <div className='about-title'>
                        <h1>History of ISKCON</h1>
                        <br />
                    </div>
                    <hr />
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
            {/* <Footer /> */}
        </div>
    );
}

export default AboutUs;
