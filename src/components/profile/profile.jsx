import React from 'react';
import Logo from './logo/logo';
import Info from './information/information';
import Interests from './interests/interests';
import Social from './socialmedia/social_media';
import Button from './button/button';
// import audio from './sound/selection.mp3';

export default function Profile(props){

    // const _audio = () => {
    //     var sound = new Audio(audio)
    //     sound.play();   
    // }
   
    return (
        <section className="profile-content" id="sidebar">
            <div className="card-profile">
                <Logo/>
                <Info/>
                <hr id="hr1"/>
                <Interests interests={props.interests}/>
                <hr id="hr2"/>
                <Social/>
                <hr id="hr3"/>
                {/* <Button/> */}
            </div>

            {/* <div className="content-logo">
                <div className="logo">
                    <img 
                    src={props.logo}
                    alt="logo"
                    />
                </div>
            </div>
            <div className="content-data">
                <p><span>Name:</span> Isaac Gonzalez</p>
                <p><span>Age:</span> 30</p>
                <p><span>Location:</span> Guadalajara</p>
            </div>
            <hr/>
            <div className="content-interesting">
                <p>Chess</p>
                <p>Art</p>
                <p>Games</p>
                <p>Programming</p>
            </div>
            <hr/>
            <div className="content-social-media">
                <span className="social git"><img src={props.git} alt="github"/></span>
                <span className="social link"><img src={props.linkedin} alt="linkedin"/></span>
            </div>
            <hr className="hr-social"/>
            <div className="content-contact">
                <button>CONTACT</button>
            </div> */}
        </section>
        // <section className="profile-content">
        //     <div className="content-logo">
        //         <div className="logo">
        //             <img 
        //             src={props.logo}
        //             alt="logo"
        //             />
        //         </div>
        //     </div>
        //     <div className="content-items">
        //         {props.menu.map((prop, key) => {
        //         return(
        //             <ul className="items"  key={key}>
        //                 <li className={prop} onMouseOver={_audio}>
        //                     <option value={prop} onMouseOver={()=>{ props.handle(prop)}}>
        //                         {prop}
        //                     </option>
        //                 </li> 
        //             </ul>
        //         );
        //         })
        //         }
        //     </div>
        // </section>
    );
}