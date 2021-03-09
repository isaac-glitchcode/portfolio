import React from'react';

export default function AboutPage(props){

    return(
        <section className="content-about">
            <div className="content-text">
                <p>
                Hello! My name is Isaac. I am passionate about technology
                I like to research on topics such as artificial intelligence, data science, videogames, bioinformatics,
                and astrophysics among others.
                I consider myself quite curious as to why? of things.
                </p>
            </div>
            <div className="content-technologies">
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>Java</h2>
                </div>
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>Python</h2>
                </div>
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>Django</h2>
                </div>
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>React</h2>
                </div>
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>MySQL</h2>
                </div>
                <div className="card card-java">
                    <img className="java" src={props.java} alt="java"/>
                    <hr/>
                    <h2>Java Script</h2>
                </div>
                
            </div>
        </section>
    )
}