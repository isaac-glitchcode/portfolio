import React from 'react';
import './css/p_description.css';
import descriptionImg from './img/description.jpg';
export default function Description(props){
    return(
        <div id="p-description">
            
                <img src={descriptionImg} alt="imgEcommerce"/>
            
                <p>
                    Developed with react on the front-end 
                    and Node on the back-end with basic 
                    functions to send and receive messages.
                </p>
             
        </div>
    )
}