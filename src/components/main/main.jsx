import React from 'react';
import Profile from '../profile/profile';
import Navbar from '../navbar/navbar';
import ContentMain from '../content-main/content-main';
import Content from '../content/content';

export default function Main(props){

    return (
        
        <div className="main">
            <Profile interests={props.interests}/>
            <Navbar/>
            <ContentMain/>
            <div id="content1"><Content/></div>
            <div id="content2"><Content/></div>
            <div id="content3"><Content/></div>
            <div id="content4"><Content/></div>
            <div id="content5"><Content/></div>
            <div id="content6"><Content/></div>
            
            

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
