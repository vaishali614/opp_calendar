import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

// import { Link } from 'react-router-dom';

export class Section extends Component {
    render() {
        // const handleSelect = eventKey => ;
        return (
            <Nav justify variant="tabs" activeKey="1">
                <Nav.Item>
                    <Nav.Link eventKey="1" href="/">Internships</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" href="/hackathon">Hackathons</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" href="/scholarship">Scholarships</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" href="/conference">Conferences</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Section;
