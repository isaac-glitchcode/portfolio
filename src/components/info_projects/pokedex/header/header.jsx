import React from 'react';
import './css/header.css';
import pokebanner  from './img/pokebanner.jpg';

export default function Header(props){
    return(
        <div id="header">
            <div className="banner">
                <img src={pokebanner} alt="pokédex"/>
            </div> 
        </div>
    )
}