import React, {Component} from 'react';
import {Container, Carousel} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="Home">
                <Container className="Home-container">
                    <Carousel className="">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/Carousel/Bas Ajvar.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        {/*<Carousel.Item>*/}
                            {/*<img*/}
                                {/*className="d-block w-100"*/}
                                {/*src="assets/Carousel/Golemi_EN_Gurmano_Pack_2018.png"*/}
                                {/*alt="Second slide"*/}
                            {/*/>*/}
                        {/*</Carousel.Item>*/}
                        {/*<Carousel.Item>*/}
                            {/*<img*/}
                                {/*className="d-block w-100"*/}
                                {/*src="assets/Carousel/Mali_EN_Gurmano_Pack_2018.png"*/}
                                {/*alt="Third slide"*/}
                            {/*/>*/}
                        {/*</Carousel.Item>*/}
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\Carousel\Perustija.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets\Carousel\1.jpg"
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        );
    }
}

export default Home;