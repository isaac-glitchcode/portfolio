import React from'react'

export default function Content(props){
    return(
        <section id="content">
           
            <div id="content-img-tech" >
                <img src={props.imgtech} alt={props.name}/>
            </div>
            <hr/>
            <div className="card-name"><h1>{props.name}</h1></div>

        </section>
    )
}