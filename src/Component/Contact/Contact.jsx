import React, { Component } from 'react';
import  {Container, Row, Col} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' /*imports fontAwesome library*/
import { library } from '@fortawesome/fontawesome-svg-core'; /*import font awesome icons*/
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'; /*imports Envelope Icon*/
import {faBuilding } from '@fortawesome/free-solid-svg-icons' /*import envelope icon*/
import {faPhone} from '@fortawesome/free-solid-svg-icons'; /*import twitter icon*/
import './Contact.css';

library.add(faEnvelope); /*add Instagram icon to website*/
library.add(faBuilding); /*adds Building Icon to website*/
library.add(faPhone); /*adds Twitter Icon to website*/

class Footer extends Component {
    render() {
        return (
            <div className="Contact">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title">Contact</h1>
                        </Col>
                    </Row>
                    {/*uses the font awesome icons, check documentation to learn more: https://fontawesome.com/how-to-use/on-the-web/using-with/react*/}
                    <Row className="Contact-info">
                            <Col md={4}>
                                <h3 className="Title-ic">Address</h3>
                                <FontAwesomeIcon className="building fa-fw Logo-ic" icon={faBuilding} color="black"/>
                                <address className="Address-ic">
                                    Euro Forte Trade Inc.<br/>
                                    35 Brian Peck Cres #704<br/>
                                    Toronto, ON M4G 0A5<br/>
                                </address>
                            </Col>
                            <Col md={4}>
                                <h3 className="Title-ic">Phone Number</h3>
                                <FontAwesomeIcon className="phone fa-fw Logo-ic" icon={faPhone} color="black"/>
                                <address className="Address-ic">
                                    <a href="mailto:contact@eurofortetrade.ca">contact@eurofortetrade.ca</a>
                                </address>
                            </Col>
                            <Col md={4}>
                                <h3 className="Title-ic">Email</h3>
                                <FontAwesomeIcon className="mail fa-fw Logo-ic" icon={faEnvelope} color="black"/>
                                <address className="Address-ic">
                                    <a href="tel:416-662-6026">416-662-6026</a>
                                </address>
                            </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Footer;
