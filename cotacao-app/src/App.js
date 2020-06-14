import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

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

    if (isLoaded) {
      for (var i in cotacoes)
        result.push([cotacoes[i]]);

      console.log(result);
    }

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
