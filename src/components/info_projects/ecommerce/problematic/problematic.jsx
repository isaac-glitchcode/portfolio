import React from 'react';
import './css/problematic.css';
import img from './img/example.jpg';
export default function Problem(props){
    return(
        <div id="p-problematic">
            
            
                <p>
                    E-commerce prototype aimed at the gamer public.
                    Here you can find some titles for Xbox and Play Station consoles.
                    It contains basic functions such as adding a game to the shopping cart, removing a game from the shopping cart, viewing items within the shopping cart as well as seeing the total to pay.
                    Currently still in development.

                </p>
                <img src={img} alt="pokédex"/>

        </div>
    )
}