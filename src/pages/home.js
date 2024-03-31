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
import Footer from '../components/footer';

// import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";

const Home = ({ updateHighlight }) => {
  const ActiveValue = 500;
  const SessionsValue = 1000;
  const ConferencesValue = 4;

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
      <div className="backgroundimg">
        <div className="center-content">
          {/* Your content goes here */}
          <h1>ISKCON Youth Forum</h1>
          <p>
            Your Hub for Spiritual Growth & Community. Engage in discussions,
            service projects, and events tailored for youth. Join us in a
            journey of self-discovery and service
          </p>
        </div>
      </div>
      <div className="content-container">
        <div className="row" style={{ width: "80%" }}>
          <div className="counter-div  col-lg-4">
            <p className="counter">{Math.round(Active)} +</p>
            <h2 className="counter-heading">Active Participants</h2>
            <p className="counter-def">
              Join a thriving community of over 500 dedicated youth members
              actively engaging in discussions, events, and service projects.
            </p>
          </div>

          <div className=" counter-div  col-lg-4">
            <p className="counter">{Math.round(Sessions)} +</p>
            <h2 className="counter-heading">Interactive Sessions</h2>
            <p className="counter-def">
              Experience over 1000 dynamic sessions designed to deepen your
              spiritual understanding, enhance your skills, and foster
              meaningful connections.
            </p>
          </div>
          <div className="  col-lg-4">
            <p className="counter">{Math.round(Conferences)}</p>
            <h2 className="counter-heading">Annual Conferences</h2>
            <p className="counter-def">
              Participate in our annual conferences, featuring workshops,
              seminars, and keynote speakers, creating opportunities for
              personal growth and collective inspiration
            </p>
          </div>
        </div>
        <div className="second-section">
          <div className="row">
            <div className="card_ col-lg-4">
              <div className="card-main ">
                <h2>
                  Our Mission
                  <br />
                  Empowering the Future Generation
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
                <h3 style={{ height: "50px" }}>Spiritual Growth</h3>
                <br />
                <p>
                  Nurture your spiritual journey through enlightening
                  discussions, mentorship programs, and immersive retreats
                  focused on deepening your connection with Lord Krishna.
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
                <h3 style={{ height: "70px" }}>Community Engagement</h3>
                <p>
                  Join a vibrant community of like-minded youth dedicated to
                  spreading love, compassion, and the teachings of ISKCON
                  through outreach programs, social events, and collaborative
                  projects.
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
                <h3 style={{ height: "70px" }}>Leadership Development</h3>
                <p>
                  Unlock your leadership potential through training workshops,
                  skill-building sessions, and hands-on experiences that empower
                  you to become effective leaders within your local community
                  and beyond.
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
                <h3 style={{ height: "50px" }}>Service Opportunities</h3>
                <br />
                <p>
                  Discover meaningful ways to serve humanity and contribute to
                  positive change through volunteering initiatives, charity
                  drives, and seva projects that embody the spirit of selfless
                  service taught by ISKCON.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section2">
            <div className="row">
              <div className="col-lg-3 iyf-topic">
                <h2 style={{ color: "#344767" }}>ISKCON Youth Forum</h2>
              </div>
              <div className="col-lg-9">
                <p style={{ color: "#7b809a" }}>
                  Youth Forum of ISKCON Chandigarh represents our youth wing.
                  Youngsters can bring massive changes in the world. We too
                  understand this. This is the reason behind the formation of
                  the ISKCON Youth Forum.
                </p>
              </div>

              {/* <br></br> */}
            </div>
            <hr />

            <div className="row">
              <div className="col-lg-3 iyf-topic">
                <h4 style={{ color: "#344767" }}>GOALS</h4>
              </div>
              <div className="col-lg-9">
                <div className="goals-container">
                  {goalsData.map((goal, index) => (
                    <div className="goal-card" key={index}>
                      <p>{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <br></br> */}
            </div>
          </div>

          <div className="section2">
            <div class="container-coursel">
              <div class="carousel">
                <div class="carousel__face">
                  <span>Counselling</span>
                </div>
                <div class="carousel__face">
                  <span>Parsadam</span>
                </div>
                <div class="carousel__face">
                  <span>Lectures</span>
                </div>
                <div class="carousel__face">
                  <span>Meditation</span>
                </div>
                <div class="carousel__face">
                  <span>Fun</span>
                </div>
                <div class="carousel__face">
                  <span>Parsadam</span>
                </div>
                <div class="carousel__face">
                  <span>Trips</span>
                </div>
                <div class="carousel__face">
                  <span>Meditation</span>
                </div>
                <div class="carousel__face">
                  <span>Drama</span>
                </div>
              </div>
            </div>
            <div className="corusel-blank"></div>
          </div>
          <div className="section2" style={{ color: "#344767" }}>
            <div className="row">
              <div className="col-lg-3 iyf-topic">
                <h4 style={{ color: "#344767" }}>ACTIVITIES AT A GLANCE</h4>
              </div>
              <div className="col-lg-9">
                <div className="activities-container">
                  {activitiesData.map((activity, index) => (
                    <div className="activity-card" key={index}>
                      <h4>{activity.title}</h4>
                      <p>{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="section2-second">
            <div className="section2-black">
              <div className="section2-second-text">
                <h2 style={{ color: "white" }}>BECOME A YOUTH PATRON</h2>
                <p style={{ color: "white" }}>
                  Krishna once said that good deeds made, gifted, frugal, and
                  done without faith are shown as no or “assat.” Therefore,
                  neither here nor below is useful. Let us take a step closer to
                  the devotion of Kanha and do our bit to help others in need.
                </p>
              </div>
            </div>
            <div className="Donate-Button" onClick={navigateToDonate}>
              YOUTH PATRON
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
