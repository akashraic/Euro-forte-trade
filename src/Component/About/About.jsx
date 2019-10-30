import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import './About.css';

class About extends Component {
    render() {
        return (
          <div className="About">
            <Container>
                <h1 className="About-title">About us</h1>
                <p className="Text">Euro Forte Trade Inc. is a leading supplier to the Balkan, Mediterranean and Eastern European Markets in Canada. We take great pride and personal satisfaction in the relationships developed with both our suppliers and our customers since 2006. With our extensive world wide sourcing abilities, we can catalog trends, anticipate shortages, and provide real time out comes. In partnership with our International and local suppliers we are constantly developing new and exciting projects so as to better serve you, our customer. With a new state of the art warehouse and logistical practices in place we can consistently ensure the utmost quality in all of our commodities while providing competitive pricing and on-time delivery.</p>
                <p className="Text">Our renowned strengths in sourcing, distribution, sales and marketing provide you, our customers, with all the tools necessary to making those vital purchasing decisions. As well as understanding our business we have an ongoing commitment to our customers, whether large or small, in providing, Dependability, Reliability, Consistency and Quality in everything we do.</p>
                <p className="Text">We have been importing and distributing fine Food products throughout Greater Toronto Area offering an extensive range of quality products carefully selected for today's discerning customers. Operating from a modern Warehouse and with a rich experience in the field, we believe that together with our dedicated buying and sales team Euro Forte Trade Inc. are able to offer a level of service and product range to meet the demands of the customers.</p>
                <p className="Text">Our product portfolio includes some of European premier brands together with many carefully selected regional products capturing the diversity and authenticity of traditional Balkan and Mediterranean cuisine. Our dedication and focus on quality and service has enabled us, throughout the many years, to retain a loyal customer base whilst remaining competitive and constantly reviewing and sourcing new products to meet new challenges and demands.</p>
            </Container>
          </div>
        );
    }
}

export default About;