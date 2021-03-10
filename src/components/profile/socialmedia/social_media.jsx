import React from 'react';
import Git from '../img/git.png';
import Linkedin from '../img/link.png';


export default function Social(props){
    return(
        <div id="social-media">
            <a href="https://github.com/isaac-glitchcode" target="_blank" rel="noreferrer" >
                <img className="social" id="git" src={Git} alt="github"/>
            </a>
            <a  href="https://www.linkedin.com/in/isaac-gonzalez-7b1931145/" target="_blank" rel="noreferrer" >
                <img className="social" id="link" src={Linkedin} alt="linkedin"/>
            </a>
        </div>
    )
}