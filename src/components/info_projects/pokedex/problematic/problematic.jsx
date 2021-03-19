import React from 'react';
import './css/problematic.css';
import img from './img/example.jpg';
export default function Problem(props){
    return(
        <div id="p-problematic">
            
            
                <p>
                    La app cuenta con una interfaz en al que se muestran 
                    sprites estaticos de cada pokémon, así como una barra para filtrar
                    y otra de busqueda. 
                    Al dar click sobre algún pokémon, se mostrará la imagen animada 
                    y su respectivo sonido según los videojuegos, de la misma manera 
                    sus estadisticas, nombre y su tipo.

                </p>
                <img src={img} alt="pokédex"/>

        </div>
    )
}