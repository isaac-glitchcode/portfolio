import React from 'react';
// import audio from './sound/selection.mp3';

export default function Menu(props){

    // const _audio = () => {
    //     var sound = new Audio(audio)
    //     sound.play();   
    // }
   
    return (
        <section className="profile-content ">
            <div className="content-logo">
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
            </div>
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