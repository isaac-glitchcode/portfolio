import React from 'react';
import About from '../about/about';
// import {Link} from 'react-router-dom';

export default function Preview(props){
    const fn = (event) => {
        console.log(event.target.value);
        props.handle(event.target.value);
    }

    return(
        <section className="content-info">
            
            <div className="navbar">
                <nav>
                    <ul>
                        {
                            props.turn===1? 
                                <li value="1" onMouseOver={(event) => fn(event)} className="item-selected">About</li>
                            :
                                <li value="1" onMouseOver={(event) => fn(event)}>About</li>
                    
                        }
                        {
                            props.turn===2? 
                                <li value="2" onMouseOver={(event) => fn(event)} className="item-selected">Portfolio</li>
                            :
                                <li value="2" onMouseOver={(event) => fn(event)}>Portfolio</li>
                    
                        }
                        {
                            props.turn===3? 
                                <li value="3" onMouseOver={(event) => fn(event)} className="item-selected">Extras</li>
                            :
                                <li value="3" onMouseOver={(event) => fn(event)}>Extras</li>
                    
                        }
                    </ul>
                </nav>

                <div className="light-option-bar">
                    {
                     props.turn===1?<span className="ch1 ch-active-general"></span>
                     :
                     <span className="ch01 ch-inactive-general"></span>
                    }
                    {
                     props.turn===2?<span className="ch2 ch-active-general"></span>
                     :
                     <span className="ch02 ch-inactive-general"></span>
                    }
                    {
                     props.turn===3?<span className="ch3 ch-active-general"></span>
                     :
                     <span className="ch03 ch-inactive-general"></span>
                    }
                    
                </div>
                <div className="option-bar"></div>
            </div> 
            <div className="content">
                {
                    
                    props.turn===1? 
                        <div className="show"><About java={props.java}/></div>
                    :
                        <div className="hide"><About /></div> 
            
                    
                }
                
            </div>

        </section>
        // <section className="preview">
        //     <div className="content-preview">
        //         <h1 className="title">{props.option_selected}</h1>
        //         {props.option_selected===""?<div></div>:
        //             <div className="card-1">
        //                 <div className="content-img">
        //                     <img 
        //                     src={props.img}
        //                     alt={props.option_selected}
        //                     className="prev-img"/>
        //                 </div>
        //                 <div className="content-options">
        //                     {(()=>{
        //                         switch (props.option_selected){

        //                             case "GitHub":
        //                                 return <a href="https://github.com/isaac-glitchcode" target="_blank" rel="noreferrer" className="btn-prev link">More</a>;
        //                             case "LinkedIn":
        //                                 return <a href="https://www.linkedin.com/in/isaac-gonzalez-7b1931145/" target="_blank" rel="noreferrer" className="btn-prev link">More</a>
        //                             default:
        //                                 return <Link to={props.option_selected} className="btn-prev link">More</Link>}
        //                     })()}
                            
        //                 </div>
        //             </div>
        //         }
        //     </div> 
        // </section>
    );
  
}