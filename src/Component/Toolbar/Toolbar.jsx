import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";


class Toolbar extends Component {
    render()
    {
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#Home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Products">Products</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Toolbar;