import React, {useState} from 'react';
import Content from './content/content';
import Java from './content/img/java.png';
import Python from './content/img/python.png';
import JS from './content/img/js.png';
import Sql from './content/img/sql.png';
import Django from './content/img/django.png';
import React_ from './content/img/react.png';


// import About from '../about/about';
// import {Link} from 'react-router-dom';

export default function Preview(props){
    // const fn = (event) => {
    //     // console.log(event.target.value);
    //     props.handle(event.target.value);
    // }
    const [technologies] = useState(
              
                [
                  ["Java",Java],
                  ["Python",Python],
                  ["Java Script",JS],
                  ["MySQL",Sql],
                  ["Django",Django],
                  ["React",React_],
                ]     
    );

    return(
        <section id="about" >
            <div className="content-description">
                <p id="description">
                    Hello! My name is Isaac. I am passionate about technology
                    I like to research on topics such as artificial intelligence, data science, videogames, bioinformatics,
                    and astrophysics among others.
                    I consider myself quite curious as to why? of things.
                </p>
            </div>

            {
                technologies.map((item, key)=>{
                    const id="content"+(key+1);
                    return(
                        
                        <div id={id} key={key} >
                            <Content
                            imgtech={item[1]}
                            name={item[0]}
                            />
                        </div>

                    )
                })
            }
            {/* <div className="content-technologies" id="content2"><Content/></div>
            <div className="content-technologies" id="content3"><Content/></div>
            <div className="content-technologies" id="content4"><Content/></div>
            <div className="content-technologies" id="content5"><Content/></div>
            <div className="content-technologies" id="content6"><Content/></div> */}
            {/*<div className="content-technologies">
                {
                props.tech.map((item, key)=>{
                    return(
                        <div className="general card" key={key} id="item-card">
                            <img src={item[1]} alt={item[0]}/>
                            <hr/>
                            <h2>{item[0]}</h2>
                        </div>
                    )
                })
                }
            </div> */}
            {/* {
                props.turn===1?
                    <p>Turn On</p>
                :
                    <p>Turn Off</p>

            } */}
            {/* <nav>Navbar</nav>
            <About/> */}
            
            {/* <div className="navbar">
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
                        <div className="show"><About tech={props.tech}/></div>
                    :
                        <div className="hide"><About tech={props.tech} /></div> 
            
                    
                }
                
            </div> */}

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