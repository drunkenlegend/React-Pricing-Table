import React from 'react';
import './Card.css';

function Card(props) {

    const features=["Centralized Teams",
                    "Version History",
                    "Plugin Administration",
                    "Facebook & Instagram Ads",
                    "Design System Analytics",
                    "Unlimimted Cloud Storage"
                ]
                
                    
    return (
        <div className="card" style={{border: "solid .5px rgb(185, 181, 181)",borderRadius:"10px"}}>
            <div className="cardTop">
                <h1 style={{color:props.color, fontSize:"50px"}}>${props.cost}</h1>
                <p>Per user,per month</p>
            </div>
            <div className="cardLower" style={{background: props.color}}>
                <h2 >{props.plan}</h2>
                {features.map((feature,i) =>(
                    <p style={ props.selected[i]==="1" ? {textDecoration:"none"} : {textDecoration:"line-through"}}>{feature}</p>
                ))}
                <button className="cardButton" style={{color:props.color,fontWeight:"500"}}>Go {props.plan}</button>

            </div>
        </div>
    )
}

export default Card
