import React from 'react';
import Profile from '../profile/profile';
import Navbar from '../navbar/navbar';
import About from '../about/about';


import Portfolio from '../portfolio/portfolio';
import Extras from '../extras/extras';

export default function Main(props){

    return (
        
        <div className="main">
            <Profile interests={props.interests}/>
            <Navbar turn={props.turn} handle={props.handler}/>
            {
                props.turn===1?
                    <div className="work-space">
                        <About/>
                        
                    </div>
                :
                    <div></div>
            }
            {
                props.turn===2?
                    <div className="work-space">
                        <Portfolio/>
                    </div>
                :
                    <div></div>
            }
            {
                props.turn===3?
                    <div className="work-space">
                        <Extras/>
                    </div>
                :
                    <div></div>
            }

            
            
            

            {/* <div className="container profile">
                <div className="row">
                    <aside id="sidebar">
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
                        <Information handle={props.handler} turn={props.turn} tech={props.tech}/>
                    </section>
                </div>
            </div> */}
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
