import React from 'react';
import './css/sketch.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
export default function Skecth(props){
    return(
        <div id="p-sketch">
            
                <img src={img1} alt="chat-sketch"/>
                <img src={img2} alt="chat-sketch"/>

        </div>
    )
}