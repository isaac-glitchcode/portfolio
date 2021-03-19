import React from 'react';
import './css/ecommerce.css';
import Header from './header/header';
import Description from './description/p_description';
import Problem from './problematic/problematic';
import Sketch from './sketch/sketch';
import Galery from './galery/galery';

export default function Ecommerce(props){
    
    return(
        <div id="ecommerce">
            <Header/>
            <h2 id="title">E-commerce</h2>

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