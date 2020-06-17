import React, { Component } from 'react';
import './App.css';
import Cotacao from './components/Cotacao'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cotacoes: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          cotacoes: json
        })
      })

  }

  render() {

    var { isLoaded, cotacoes } = this.state;
    var result = [];
    var teste = [];
    const filter = ["ARS", "AUD", "BRL", "CAD", "CHF", "EUR", "GBP", "USD"];

    if (isLoaded) {
      for (var i in cotacoes)
        result.push([cotacoes[i]]);

      const resultFiltered = result.filter((r) => {
        return filter.indexOf(r[0].code) != - 1;
      });

      console.log(resultFiltered);

      for (const item of resultFiltered) {
        teste.push(
          <div key={item[0].code + item[0].codein}>
            <Cotacao nome={item[0].name} moeda={item[0].code} compra={parseFloat(item[0].bid).toFixed(2)} venda={parseFloat(item[0].ask).toFixed(2)} />
          </div>
        )
      }
    }

    return (
      <div className="App">
        <div className="Cotacoes">
          {teste}
        </div>
      </div>
    );
  }
}

export default App;
