import React from 'react';

export default function Interests(props){
    return(
        <div id="interest">
            {
                props.interests.map((item, key)=>{
                    return(
                        <p key={key}>{item}</p>
                    )
                })
            }

        </div>
    )
}