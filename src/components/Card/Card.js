import React from "react";
import "./Card.css";

const Card = props => (
    <div Classname="card" onClick={() => props.clickCount(props.id)}>
        <div class="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
)

export default Card;