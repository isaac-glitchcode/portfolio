import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import pokebanner  from './img/pokebanner.jpg';

export default function Header(props){
    return(
        <div id="header">
            <div className="banner">
                <img src={pokebanner} alt="pokédex"/>
                <a className="btn" href="https://pokedex-app1.netlify.app" target="_blank" rel="noreferrer">See Demo</a>
                <Link to="/"className="btn" >Home</Link>
            </div>
        </div>
    )
}