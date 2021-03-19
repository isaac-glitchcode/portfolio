import React from 'react';
import './css/header.css';
import pokebanner  from './img/pokebanner.jpg';

export default function Header(props){
    return(
        <div id="header">
            <div className="banner">
                <img src={pokebanner} alt="pokédex"/>
            </div> 
            <a href="/">Return</a>
            <a href="https://pokedex-app1.netlify.app">See Demo</a>
        </div>
    )
}