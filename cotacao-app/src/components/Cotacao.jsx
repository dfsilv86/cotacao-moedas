import React, { Component } from 'react'
import './Cotacao.css'

export default class Cotacao extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moeda_de: "",
            moeda_para: 0
        }

        this.converter = this.converter.bind(this);
    }

    converter() {

        let moeda_para = (parseFloat(this.state.moeda_de) * parseFloat(this.props.compra)).toFixed(2);
        this.setState({ moeda_para });
    }

    render() {
        return (
            <div className="Cotacao">
                <div className="Content">
                    <p>{this.props.nome}</p>
                    <img alt="" className="Img" key={this.props.moeda} src={require(`../img/${this.props.moeda}.png`)} />
                    <p>Compra: {this.props.compra}</p>
                    <p>Venda: {this.props.venda}</p>
                    <input type="text" onChange={(event) => { this.setState({ moeda_de: event.target.value }) }} />
                    <button className="button" type="button" text="Converter" onClick={this.converter} >Converter</button>
                    <h2>Valor: {this.state.moeda_para}</h2>
                </div>
            </div>
        )
    }
}