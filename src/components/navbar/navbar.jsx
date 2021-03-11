import React from'react'

export default function Navbar(props){
    const fn = (event) => {
        // console.log(event.target.value);
        props.handle(event.target.value);
    }
    return(
        <nav id="navbar">
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
    )
}
