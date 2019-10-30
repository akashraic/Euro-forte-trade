import React, {Component} from 'react';
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";
import './CustomNavbar.css';


class CustomNavbar extends Component {
    render()
    {
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="Navbar">
                <Navbar.Brand href="#Home" className="Logo-container"><Image src="/assets/EFT_Logo.png" className="Logo"/></Navbar.Brand>
                <div className="spacer"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="Navbar-nav-items"><NavItem className="Navbar-links" href="#Home">Home</NavItem></li>
                        <li className="Navbar-nav-items"><NavItem className="Navbar-links" href="#About">About</NavItem></li>
                        <li className="Navbar-nav-items"><NavItem className="Navbar-links" href="#Products">Products</NavItem></li>
                        <li className="Navbar-nav-items"><NavItem className="Navbar-links" href="#Contact">Contact</NavItem></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;