import React from 'react';
import './css/galery.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
export default function Galery(props){
    return(
        <div id="p-galery">
            
                <img src={img1} alt="item"/>
                <img src={img2} alt="item"/>

        </div>
    )
}