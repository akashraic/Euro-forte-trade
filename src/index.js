import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8RbVhQluTrgGfrd01blCmQ8w2n_CqK-c",
    authDomain: "euro-forte-trade.firebaseapp.com",
    databaseURL: "https://euro-forte-trade.firebaseio.com",
    projectId: "euro-forte-trade",
    storageBucket: "euro-forte-trade.appspot.com",
    messagingSenderId: "551944675479",
    appId: "1:551944675479:web:8df7b0667f11dffa8109d2",
    measurementId: "G-6E9B7JEKJN"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    (<BrowserRouter>
    <App />
    </BrowserRouter>)
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
