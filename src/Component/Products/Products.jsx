import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Toolbar from "./Toolbar";

class Products extends Component {
    render() {
        return(
            <div className="Products">
                <Container>
                    <h1>Products</h1>
                    <Toolbar/>
                </Container>
            </div>
        );
    }
}

export default Products;