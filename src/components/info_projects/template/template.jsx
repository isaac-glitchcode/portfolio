import React from 'react';
import Header from '../pokedex/header/header';
import Description from '../pokedex/description/p_description';
import Problem from '../pokedex/problematic/problematic';
import Sketch from '../pokedex/sketch/sketch';
import Galery from '../pokedex/galery/galery';

export default function Template(props){
    
    return(
        <div id="template">
            <Header/>
            <h2 id="title">Pokédex</h2>

            <Description/>
            <hr/>
            <h2>Description</h2>
            
            <Problem/>
            <hr/>
            <h2>Sketch</h2>

            <Sketch/>
            <hr/>
            <h2>Galery</h2>
            <Galery/>
        </div>
    )
}