import React from 'react';
import Menu from './menu'
import Preview from './preview';

export default function Main(props){

    return (
        
        <div className="container">
            <div className="row">
                <header className="col-sm-12">
                    <nav className="main">
                        <Menu menu = {props.menu} handle={props.handle}/>
                        <Preview option_selected={props.option} img={props.img}/>
                    </nav> 
                </header>
            </div>
            <div class>

            </div>
        </div>
    );
  
}
