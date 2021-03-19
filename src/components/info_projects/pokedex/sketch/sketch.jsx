import React from 'react';
import './css/sketch.css';
import img3 from './img/pk1.jpeg';
import img2 from './img/pk2.jpeg';
import img1 from './img/pk3.jpeg';
export default function Skecth(props){
    return(
        <div id="p-sketch">
            
                <img src={img1} alt="pokédex"/>
                <img src={img2} alt="pokédex"/>
                <img src={img3} alt="pokédex"/>

        </div>
    )
}