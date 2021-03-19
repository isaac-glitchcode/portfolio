import React from 'react';
import ExtrasCards from './extras-cards/extras-cards';
import img1 from './extras-cards/img/img1.jpg';
import img2 from './extras-cards/img/img2.jpg';
import img3 from './extras-cards/img/img3.jpg';
import img4 from './extras-cards/img/img4.jpg';
import img5 from './extras-cards/img/img5.jpg';
import img6 from './extras-cards/img/img6.jpg';


export default function Extras(props){
    
    return(
        <div id="content-extras">
            <ExtrasCards img={img1}/>
            <ExtrasCards img={img2}/>
            <ExtrasCards img={img3}/>
            <ExtrasCards img={img4}/>
            <ExtrasCards img={img5}/>
            <ExtrasCards img={img6}/>
            
        </div>
    )
}