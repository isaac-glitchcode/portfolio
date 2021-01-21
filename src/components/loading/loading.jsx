import React from 'react'


export default function Loading(props){
    
    return(
        <section className="content-load">
            <img className="logo" src={props.logo} alt="Bg"/>
            
            <div className="progress"></div>
            
           <input 
                className="button" 
                type="button" 
                onClick={props.handler}
                style={props.style}
                value="START"
                />
        </section>
    );
}