import React from 'react'
import './Cotacao.css'

export default props => {

    return (
        <div className="Cotacao">
            <div className="Content">
                <p>{props.nome}</p>
                <img className="Img" key={props.moeda} src={require(`../img/${props.moeda}.png`)} />
                <p>Compra: {props.compra}</p>
                <p>Venda: {props.compra}</p>

                <input></input>
                <button>Converter</button>
                <h2>Valor: </h2>
            </div>
        </div>
    )
}