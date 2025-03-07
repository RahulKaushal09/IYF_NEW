import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/css/main.css';

function dashBoard() {
    console.log('test')
    return (
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">
                    <div className="sidebar">
                        <Nav className="flex-column " style={{ marginTop: "80px" }}>
                            <Nav.Link href="#donation">Donation</Nav.Link>
                            <Nav.Link href="#devotees-connected">Devotees Connected</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                        </Nav>
                    </div>
                </Col>
                <Col xs={10} id="page-content-wrapper">
                    <div className="main-content">
                        <h2>Welcome to the Dashboard</h2>
                        <section id="donation">
                            <h3>Donation</h3>
                            <p>Details about donations will be displayed here.</p>
                        </section>
                        <section id="devotees-connected">
                            <h3>Devotees Connected</h3>
                            <p>Information about devotees connected will be displayed here.</p>
                        </section>
                        <section id="events">
                            <h3>Events</h3>
                            <p>Details about events will be displayed here.</p>
                        </section>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default dashBoard;
