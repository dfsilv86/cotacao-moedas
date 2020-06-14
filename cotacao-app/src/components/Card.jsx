import React from 'react'
import './Card.css'

export default props => {

    const array = ["brasil", "argentina", "eua", "ue", "chile"];

    const images = array.map(image => {
        return <img key={image} src={require(`./img/${image}.png`)} className="img-responsive" />
    });

    return (

        /* teste */
        <div className="Card">
            <div className="Title"> {props.moeda} </div>
            <div className="Content"> Conteúdo.. </div>
        </div>
    )
}