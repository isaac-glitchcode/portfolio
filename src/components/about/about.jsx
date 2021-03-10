import React from'react';

export default function AboutPage(props){

    return(
        <section className="content-about">
            <div id="content-main">Content Main</div>
            <div id="content1">content1</div>
            <div id="content2">content2</div>
            <div id="content3">content3</div>
            <div id="content4">content4</div>
            <div id="content5">content5</div>
            <div id="content6">content6</div>

            
            {/* <div className="content-text">
                <p id="description">
                Hello! My name is Isaac. I am passionate about technology
                I like to research on topics such as artificial intelligence, data science, videogames, bioinformatics,
                and astrophysics among others.
                I consider myself quite curious as to why? of things.
                </p>
            </div>
            <div className="content-technologies">
                {
                props.tech.map((item, key)=>{
                    return(
                        <div className="general card" key={key} id="item-card">
                            <img src={item[1]} alt={item[0]}/>
                            <hr/>
                            <h2>{item[0]}</h2>
                        </div>
                    )
                })
                }
                
            </div> */}
        </section>
    )
}