import React, {useState} from 'react';
import Card from './cards/card';
import Pokedex from './cards/img/Pokedex.jpg'
import Ecomerce from './cards/img/Ecomerce.jpg'
import Chat from './cards/img/Chat.jpg'



export default function Portfolio(props){
    const html ="https://www.shareicon.net/data/512x512/2016/05/06/760858_html_512x512.png";
    const css ="https://lh3.googleusercontent.com/proxy/qWq2x_4HkPQmClS_5xX3qAAUt1nsu0lMdw7G-qv7QjBb5M-86xBPnhoa1gpbTe9h1eoBiby6PO_OZi_uQltcLrEnMI37kK-JRmlUHwdo4omzngWn708dtQ";
    const js ="https://image.flaticon.com/icons/png/512/136/136530.png";
    const reactjs ="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png";
    const redux ="https://mattgreer.dev/_next/static/images/feature-f61395eb108bbaebd96b81b1697a20a4.svg";
    const express ="https://images.tute.io/tute/topic/express-js.png";
    const node ="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png";


    const [projects] = useState(
        [   
            [   "Pokédex",
                Pokedex,
                "Basado en el clásico juego de pokemon, esta aplicacion recrea una"+
                " enciclopedia con la información básica de los primeros 151 pokmémons de la región de Kanto. ",
                [["Html",html],["Css",css],["Java Script",js],["React",reactjs]]
            ],

            [   "E-comerce",
                Ecomerce,  
                "E-comerce de venta de videojuegos de generos variados para consolas de Xbox y Play Station,"+
                " donde podrás encontrar varios titulos.",
                [["Html",html],["Css",css],["React",reactjs],["Redux",redux]]
            ],
            [   "Chat",
                Chat,
                "Desarrollado con react en el front-end y Node en el back-end con funciones básicas para enviar y "+
                "recibir mensajes.",
                [["Html",html],["Css",css],["React",reactjs],["Express",express],["NodeJs",node]]
            ]
        ]
    )
   
    return(
        <div id="portfolio">
            {
                projects.map((item, key)=>{
                    return(
                        
                        <Card
                            key={key}
                            name={item[0]}
                            image={item[1]}
                            description={item[2]}
                            technologies={item[3]}
                        />
                    )
                })
            }
        </div>
    )
}