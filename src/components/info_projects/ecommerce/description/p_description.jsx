import React from 'react';
import './css/p_description.css';
import descriptionImg from './img/description.jpg';
export default function Description(props){
    return(
        <div id="p-description">
            
                <img src={descriptionImg} alt="imgEcommerce"/>
            
                <p>E-commerce of sale of video games of varied genres 
                    for Xbox consoles and Play Station, 
                    where you can find several titles.
                </p>
             
        </div>
    )
}