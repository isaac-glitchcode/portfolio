import React from 'react';
import './css/galery.css';
import img1 from './img/pk1.jpg';
import img2 from './img/pk2.jpg';
import img3 from './img/pk3.jpg';
import img4 from './img/pk4.jpg';
import img5 from './img/pk5.jpg';
import img6 from './img/pk6.jpg';
import img7 from './img/pk7.jpg';
import img8 from './img/pk8.jpg';
import img9 from './img/pk9.jpg';
export default function Galery(props){
    return(
        <div id="p-galery">
            
                <img src={img1} alt="pokédex"/>
                <img src={img2} alt="pokédex"/>
                <img src={img3} alt="pokédex"/>
                <img src={img4} alt="pokédex"/>
                <img src={img5} alt="pokédex"/>
                <img src={img6} alt="pokédex"/>
                <img src={img7} alt="pokédex"/>
                <img src={img8} alt="pokédex"/>
                <img src={img9} alt="pokédex"/>

        </div>
    )
}