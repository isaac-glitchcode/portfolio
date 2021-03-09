import React from 'react';
import Profile from './profile';
import Information from './information';

export default function Main(props){

    return (
        
        <div className="main">
            <div className="container profile">
                <div className="row">
                    <aside>
                        
                        <Profile 
                        logo={props.logo} 
                        git={props.imgGit} 
                        linkedin={props.imgLink}/>
                        
                    </aside>
                </div>
            </div>
            <div className="container information">
                <div className="row">
                    <section className="preview-content">
                        <Information handle={props.handler} turn={props.turn}/>
                    </section>
                </div>
            </div>
        </div>
        // <div className="main-menu">
        //     <div className="container">
        //         <div className="row">
        //             <header className="col-sm-12">
        //                 <nav className="main">
        //                     <Menu logo = {props.logo} menu = {props.menu} handle={props.handle}/>
        //                 </nav> 
        //             </header>
        //         </div>
        //         <div className="row">
        //             <section className="preview-content">
        //                 <Preview option_selected={props.option} img={props.img}/>
        //             </section>
        //         </div>
        //     </div>
        // </div>
    );
  
}
