import React from 'react';
import './css/problematic.css';
import img from './img/example.jpg';
export default function Problem(props){
    return(
        <div id="p-problematic">
            
            
                <p>
                    This app has an interface that shows static sprites 
                    of each Pokémon, as well as a bar to filter and 
                    another to search.  
                    When you click on a Pokémon, the animated image 
                    and its respective sound will be displayed according 
                    to the video games, in the same way its name, type and 
                    statistics.

                </p>
                <img src={img} alt="pokédex"/>

        </div>
    )
}