import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap"; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Foot">
                {/*contains the LLC code and the terms link*/}
                <Row className="Footer">
                    <Col md={4} sm={3} />
                    <Col md={4} sm={6} className="Foot">
                        {/*this code retrieves the year and updates it automatically*/}
                        <ul className="list">
                            <li className="footer-copyright list-unstyled first horizontal">&copy; {(new Date().getFullYear())} Euro Forte Trade Inc.</li>
                            <li className="list-unstyled horizontal"><a href={'/Terms'} className="link">Terms</a></li>
                        </ul>
                        <div className="developer-copyright">
                            &copy; {(new Date().getFullYear())} Developed By: <a href="https://akashrai.me/" className="link" target="_blank"> Akash Rai Chhabria </a>
                        </div>
                    </Col>
                    <Col md={4} sm={3} />
                </Row>
            </div>
        )
    }

}

export default Footer;