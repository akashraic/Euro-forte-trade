import React, {Component}  from 'react';
import {Link} from "react-router-dom";
import {Switch} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' /*imports fontAwesome library*/
import { library } from '@fortawesome/fontawesome-svg-core'; /*import font awesome icons*/
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'; /*imports Envelope Icon*/
import './Toolbar.css';
import '../../Constants.jsx';
library.add(faCaretDown);

class Toolbar extends Component {
    constructor(props){
        super(props);

        this.state ={
            option: ''
        };
    }

    // chooseOption () {
    //     this.props.action(this.state.option);
    // }
    render() {
        return(
            <nav className="Toolbar-nav">
                <ul className="Toolbar-nav-list">
                    <div className="Toolbar-dropdown">
                        <button className="Toolbar-dropdown-btn">Organic <FontAwesomeIcon icon={faCaretDown}/>
                        </button>
                        <div className="Toolbar-dropdown-content">
                            <Link className="Toolbar-links" to="/" onClick={this.setState({option: "AJVAR"})}>AJVAR</Link>
                            <Link className="Toolbar-links" to="/" onClick={this.setState({option: "Baked Beans"})}>Baked Beans</Link>
                            <Link className="Toolbar-links" to="/" onClick={this.setState({option: "Nettle Leaves"})}>Nettle Leaves</Link>
                            <Link className="Toolbar-links" to="/" onClick={this.setState({option: "Pate"})}>Pate</Link>
                        </div>
                    </div>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/" onClick={this.setState({option: "Vegetables in Jars"})}>Vegetables in Jars</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/" onClick={this.setState({option: "Muesli"})}>Muesli</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/" onClick={this.setState({option: "Juices"})}>Juices</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/" onClick={this.setState({option: "Sweets and Snacks"})}>Sweets and Snacks</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/" onClick={this.setState({option: "Roasted Vegetable Spreads"})}>Roasted Vegetable Spread</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Toolbar;