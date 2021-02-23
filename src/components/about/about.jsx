import React from'react';

export default function AboutPage(props){

    return(
        <section className="about">
            <div className="title-content">
                <h1 className="title">About</h1>
            </div>
            <div className="avatar-content">
                <div className="img-content">
                    <img className="avatar" src={props.avatar} alt="avatar"/>
                </div>
            </div>
            <div className="info-content">
                <div className="info">
                    <div className="alias">
                        <h2 className="title-info">ALIAS</h2>
                        <p className="about-info">Isaac</p>
                    </div>
                    <div className="backstory">
                        <h2 className="title-info">BACKSTORY</h2>
                        <p className="about-info">Descroption here...</p>
                    </div>
                    <div className="attributes">
                        <h2 className="title-info">ATTRIBUTES</h2>
                        <div className="att-info">
                            <div><p className="about-info"><span>logo</span> name</p></div>
                            <div><p className="about-info"><span>logo</span> name</p></div>
                            <div><p className="about-info"><span>logo</span> name</p></div>
                            <div><p className="about-info"><span>logo</span> name</p></div>
                        </div>
                        <img className="finger-print"src={props.fp} alt="finger_print"/>
                    </div>
                </div>
            </div>
        </section>
    )
}