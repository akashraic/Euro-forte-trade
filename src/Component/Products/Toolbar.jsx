import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.css';

const Toolbar = props => (
    <nav className="Toolbar-nav">
        <ul className="Toolbar-nav-list">
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Product 1</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Product 2</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Product 3</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Product 4</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Product 5</Link></li>
        </ul>
    </nav>
);

export default Toolbar;