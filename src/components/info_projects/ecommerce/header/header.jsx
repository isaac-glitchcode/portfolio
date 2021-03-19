import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import ebanner  from './img/ebanner.jpg';

export default function Header(props){
    return(
        <div id="header">
            <div className="banner">
                <img src={ebanner} alt="banner"/>
                <a className="btn" href="https://0zhiy.csb.app" target="_blank" rel="noreferrer">See Demo</a>
                <Link to="/"className="btn" >Home</Link>
            </div>
        </div>
    )
}