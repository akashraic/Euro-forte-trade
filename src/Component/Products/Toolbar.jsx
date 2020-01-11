import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' /*imports fontAwesome library*/
import { library } from '@fortawesome/fontawesome-svg-core'; /*import font awesome icons*/
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'; /*imports Envelope Icon*/
import './Toolbar.css';
library.add(faCaretDown);

const routes = [
    {
        label: "AJVAR",
        fire_path: "Organic/AJVAR",
        title: "Organic AJVAR Hot/Mild",
        Description: "prepared by a traditional European recipe",
        Ingredients:"Roasted hot red peppers, eggplant, sunflower oil and salt",
        Image1: "assets/AJVAR/AJVAR_img1.png",
        Image2: "assets/AJVAR/AJVAR_img2.png"
    },
    {
        label: "Baked Beans",
        fire_path: "Organic/BakedBeans",
        title: "Organic Baked Beans",
        Description: "350 g. is ready to eat meal",
        Ingredients:"white kidney beans, parsley, onion, peppers, mentha, sunflower oil and salt.",
        Image1: "assets/AJVAR/AJVAR_img2.png"
    },
    {
        label: "Nettle Leaves",
        fire_path: "Organic/NettleLeaves",
        title: "Organic Nettle Leaves 600 g ",
        Description: "Nettles leaves have a tender texture and a “green” earthy and wild taste which is similar to the taste of spinach.",
        Ingredients: "Nettle Leaves, water, salt and citric acid."
    },
    {
        label: "Pate",
        fire_path: "Organic/NettleLeaves",
        title: "Organic pate 95g (Classic, Spicy, and Mediterana) ",
        Description: "Nettles leaves have a tender texture and a “green” earthy and wild taste which is similar to the taste of spinach.",
        Ingredients: "Nettle Leaves, water, salt and citric acid."
    },
    {
        label: "Vegetables in Jars",
        fire_path: "VegetablesInJars",
        title: "Vegetables in Jars ",

    },

];

const Toolbar = props => (
    <nav className="Toolbar-nav">
        <ul className="Toolbar-nav-list">
            <div className="Toolbar-dropdown">
                <button className="Toolbar-dropdown-btn">Organic <FontAwesomeIcon icon={faCaretDown}/>
                </button>
                <div className="Toolbar-dropdown-content">
                    <Link className="Toolbar-links" to="/">AJVAR</Link>
                    <Link className="Toolbar-links" to="/">Baked Beans</Link>
                    <Link className="Toolbar-links" to="/">Nettle Leaves</Link>
                    <Link className="Toolbar-links" to="/">Pate</Link>
                </div>
            </div>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Vegetables in Jars</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Muesli</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Juices</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Sweets and Snacks</Link></li>
            <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/">Roasted Vegetable Spread</Link></li>
        </ul>
    </nav>
);

export default Toolbar;