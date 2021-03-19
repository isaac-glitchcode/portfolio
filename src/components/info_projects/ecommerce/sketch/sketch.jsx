import React from 'react';
import './css/sketch.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
export default function Skecth(props){
    return(
        <div id="p-sketch">
            
                <img src={img1} alt="pokédex"/>
                <img src={img2} alt="pokédex"/>
                <img src={img3} alt="pokédex"/>
                <img src={img4} alt="pokédex"/>
                <img src={img5} alt="pokédex"/>

        </div>
    )
}