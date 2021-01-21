import React from 'react';
import {Link} from 'react-router-dom';

export default function Preview(props){
    
    return(
        
        <section className="preview">
            <div className="content-preview">
                <h1 className="title">{props.option_selected}</h1>
                {props.option_selected===""?<div></div>:
                    <div>
                        <div className="content-img">
                            <div className="shadow"></div>
                            <img 
                            src={props.img}
                            alt={props.option_selected}
                            className="prev-img"/>
                        </div>
                        <div className="content-options">
                            {(()=>{
                                switch (props.option_selected){

                                    case "GitHub":
                                        return <a href="https://github.com/isaac-glitchcode" target="_blank" rel="noreferrer" className="btn-prev link">More</a>;
                                    case "LinkedIn":
                                        return <a href="https://www.linkedin.com/in/isaac-gonzalez-7b1931145/" target="_blank" rel="noreferrer" className="btn-prev link">More</a>
                                    default:
                                        return <Link to={props.option_selected} className="btn-prev link">More</Link>}
                            })()}
                            
                        </div>
                    </div>
                }
            </div> 
        </section>
    );
  
}