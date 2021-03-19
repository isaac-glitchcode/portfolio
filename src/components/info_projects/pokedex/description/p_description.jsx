import React from 'react';
import './css/p_description.css';
import img from './img/description.jpg';
export default function Description(props){
    return(
        <div id="p-description">
            
                <img src={img} alt="pokédex"/>
            
                <p>Based on the classic pokemon game, 
                    this application recreates an encyclopedia 
                    with the basic information of the first 151 
                    pokémons in the Kanto region.
                </p>
             
        </div>
    )
}