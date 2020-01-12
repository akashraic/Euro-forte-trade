import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import Toolbar from "./Toolbar";
import '../../Constants.jsx';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            currOption:''
        };
    }
    chooseOption(selectedOption) {
        this.setState({
            currOption:selectedOption
        });
    }
    render() {
        return(
            <div className="Products">
                <Container>
                    <h1>Products</h1>
                    <Toolbar action={this.chooseOption.bind(this)}/>
                    <div className="Content">
                        <h1>{this.state.currOption}</h1>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Products;