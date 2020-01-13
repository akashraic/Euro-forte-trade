import React, {Component}  from 'react';
import {Link} from "react-router-dom";
import {Switch} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' /*imports fontAwesome library*/
import { library } from '@fortawesome/fontawesome-svg-core'; /*import font awesome icons*/
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'; /*imports Envelope Icon*/
import './Toolbar.css';
import * as Constants from '../../Constants.jsx';
library.add(faCaretDown);

class Toolbar extends Component {
    constructor(props){
        super(props);

        this.state ={
            option: " ",
            currOption: " "
        };
    }

    // chooseOption () {
    //     this.props.currOption(this.state.option);
    //     console.log(this.props.currOption);
    // }
    render() {
        return(
            <nav className="Toolbar-nav">
                <ul className="Toolbar-nav-list">
                    <div className="Toolbar-dropdown">
                        <button className="Toolbar-dropdown-btn">Organic <FontAwesomeIcon icon={faCaretDown}/>
                        </button>
                        <div className="Toolbar-dropdown-content">
                            {Constants.routes.filter(routes=> routes.isOrganic).map((route, index) => (
                                <li
                                    onClick={() => {
                                        this.props.currOption(route.fire_path);
                                        console.log(this.props.currOption);
                                        this.props.description(
                                            route.title,
                                            route.Description,
                                            route.Ingredients,
                                            route.Image1,
                                            route.Image2
                                        )
                                    }}>
                                    <Link
                                        key={index}
                                        className="Toolbar-links"
                                        to="/">
                                        {route.label}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    {Constants.routes.filter(routes=> !routes.isOrganic).map((route2, i) => (
                        <li
                            className="Toolbar-nav-items"
                            onClick={() => {
                                this.props.currOption(route2.fire_path);
                                console.log(route2.fire_path);
                                this.props.description(
                                    route2.title,
                                    route2.Description,
                                    route2.Ingredients,
                                    route2.Image1,
                                    route2.Image2
                                )}}>
                            <Link
                                key={i}
                                className="Toolbar-links"
                                to="/">
                                {route2.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        );
    }
}

export default Toolbar;