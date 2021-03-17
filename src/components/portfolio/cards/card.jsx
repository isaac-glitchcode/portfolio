import React from 'react';

export default function Card(props){
    return(
        <div id="card">
            <div className="card-name"><h1>{props.name}</h1></div>
            <div className="card-img"><img src={props.image} alt="projects"/></div>
            <div className="card-descr"><p>{props.description}</p></div>
            <div className="card-technologies">
                {
                    props.technologies.map((item, key)=>{
                        return(
                            <div id="items-tech" key={key}>
                                <img src={item[1]} alt={item[0]} title={item[0]}/>
                            </div>
                        )
                    })
                } 
                
            </div>
            <hr/>
            <div className="card-button">
                <button>More</button>
            </div>
        </div>
    )
}