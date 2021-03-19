import React from 'react';
import './css/problematic.css';
import img from './img/example.jpg';
export default function Problem(props){
    return(
        <div id="p-problematic">
            
            
                <p>
                Chat with basic functions such as sending and 
                receiving messages. 
                It allows you to log in without registration and 
                start a conversation.
                Likewise, the time of the message sent, communication of two or more users, 
                is displayed.

                </p>
                <img src={img} alt="chat "/>

        </div>
    )
}