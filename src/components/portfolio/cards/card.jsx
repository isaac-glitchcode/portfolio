import React from 'react';
import { Link } from 'react-router-dom';

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
                
                {
                    props.value===1? <Link to="/pokedex"><button>More</button></Link>
                    :<button>More</button>
                
                }
                {/* {
                    props.value===2? <a href="/ecomerce"><button>More</button></a>
                    :<button>More</button>
                
                }
                {
                    props.value===3? <a href="/chat"><button>More</button></a>
                    :<button>More</button>
                
                } */}
            </div>
        </div>
    )
}