import React, {useState} from 'react';
import Card from './cards/card';
import Pokedex from './cards/img/Pokedex.jpg'
import Ecomerce from './cards/img/Ecomerce.jpg'
import Chat from './cards/img/Chat.jpg'



export default function Portfolio(props){
    const html ="https://www.flaticon.es/svg/vstatic/svg/1160/1160309.svg?token=exp=1615935548~hmac=66905df8dfe64151071f7fec58d61a1e";
    const css ="https://www.flaticon.es/svg/vstatic/svg/136/136527.svg?token=exp=1615935668~hmac=1085d3273614e5b7c8b9a078c6229bea";
    const js ="https://www.flaticon.es/svg/vstatic/svg/1126/1126856.svg?token=exp=1615935916~hmac=86b4954fe2458b2315ddbdd05d18dfd2";
    const reactjs ="https://www.flaticon.com/svg/vstatic/svg/875/875209.svg?token=exp=1615936034~hmac=49ea5f4de31652fa49bb83ea48f29479";
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