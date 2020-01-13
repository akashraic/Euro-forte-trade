import React, {Component} from 'react';
import {Col, Container, Image} from "react-bootstrap";
import Toolbar from "./Toolbar";
import '../../Constants.jsx';
import * as firebase from 'firebase';
import * as Constants from "../../Constants";

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            currOption:" ",
            bool:true,
            fileURL:[],
            head: " ",
            desc:" ",
            recipe: " ",
            img1: " ",
            img2: " "

        };
        this.chooseOption = this.chooseOption.bind(this)
    }
    chooseOption(selectedOption) {
        this.setState({
            currOption:selectedOption,
            fileURL: [],
            bool:true
        });
        console.log(JSON.stringify(this.props.currOption))
    }

    descriptionUpdater = (Title, Description, Ingredients, Image1, Image2) => {
        this.setState({
            head: Title ,
            desc: Description,
            recipe: Ingredients,
            img1: Image1,
            img2: Image2
        });
    };

    componentDidUpdate() {
        if (this.state.bool) {
            // Get a reference to the storage service, which is used to create references in your storage bucket
            let storage = firebase.storage();
            let storageRef = storage.ref();
            // Create a reference under which you want to list
            let listRef = storageRef.child(this.state.currOption);

            // Find all the prefixes and items.
            listRef.listAll().then((res) => {
                res.items.forEach((itemRef) => {
                    itemRef.getDownloadURL().then((url) => {
                        let joined = this.state.fileURL.concat(url);
                        this.setState({fileURL: joined});
                    }).catch(function (error) {
                        // Handle any errors
                        console.log(error);
                    });
                });
            }).catch(function (error) {
                console.log(error);
            });
            this.state.bool = false;
        }
    }
    render() {
        let body;

        if (this.state.currOption !== " ") {
            body =
                (<div className="Content">
                    <h2>{this.state.head}</h2>
                    <div className="Image-div">
                        <Image src={this.state.img1}/>
                        <Image src={this.state.img2}/>
                    </div>
                    <p>{this.state.desc}</p>
                    <p>{this.state.recipe}</p>
                </div>);
        }
        // /*This set of code divides the URLS into columns containing 4 images*/
        // let path = this.state.fileURL.length;
        // // array of N elements, where N is the number of columns needed
        // const cols = [...Array(Math.ceil(path/4))];
        // // chunk the products into the array of columns
        // const imgCols = cols.map((col, num) => this.state.fileURL.slice(num * 4, num * 4 + 4) );
        // let photoNum =  Array.from(Array(path).keys());
        // // Map the rows as div.row
        // const imgURL = imgCols.map((col, num) => (
        //     <Col className="Image-container" key={num}>
        //         {/*map products in the col as images */}
        //         {col.map( (url, index) => <Image className="Photo-Images" key={photoNum[index+(4*num)]} src={url} onClick={() => this.toggleModal(photoNum[index+(4*num)])} />)}
        //     </Col>
        // ));

        return (
            <div className="Products">
                <Container>
                    <h1>Products</h1>
                    <Toolbar
                        currOption={this.chooseOption}
                        description={this.descriptionUpdater}/>
                    {body}
                    <div className="Images">
                        {this.state.fileURL}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Products;