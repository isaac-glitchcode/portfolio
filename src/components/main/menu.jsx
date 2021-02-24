import React from 'react';
import audio from './sound/selection.mp3';

export default function Menu(props){

    const _audio = () => {
        var sound = new Audio(audio)
        sound.play();   
    }
   
    return (
        <section className="menu">
            <div className="content-logo">
                <div className="logo">
                    <img 
                    src={props.logo}
                    alt="logo"
                    />
                </div>
            </div>
            <div className="content-items">
                {props.menu.map((prop, key) => {
                return(
                    <ul className="items"  key={key}>
                        <li className={prop} onMouseOver={_audio}>
                            <option value={prop} onMouseOver={()=>{ props.handle(prop)}}>
                                {prop}
                            </option>
                        </li> 
                    </ul>
                );
                })
                }
            </div>
        </section>
    );
}