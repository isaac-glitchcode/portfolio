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
                "Based on the classic pokemon game, this application recreates an encyclopedia with the basic information of the first 151 pokémons in the Kanto region.",
                [["Html",html],["Css",css],["Java Script",js],["React",reactjs]]
            ],

            [   "E-comerce",
                Ecomerce,  
                "E-commerce of sale of video games of varied genres for Xbox consoles and Play Station, where you can find several titles.",
                [["Html",html],["Css",css],["React",reactjs],["Redux",redux]]
            ],
            [   "Chat",
                Chat,
                "Developed with react on the front-end and Node on the back-end with basic functions to send and receive messages.",
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