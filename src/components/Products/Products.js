// Importando React
import React, {Component} from 'react';
import './Products.css';
import { render } from 'react-dom';

import data from './../../../data/mock.json';

/* Renderizado para mostrar los datos en la web */
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { // En este estado agregaremos los datos de la api
      productos: [],
    }
    this.fetchData = this.fetchData.bind(this); // Enlazando la función fetchData a ese estado
  }

  fetchData(){ // Función que llama a la api
    fetch('items')
    .then(data => (data.json()))
    .then(data => (console.log(data)))
    .then(results => {
      const api_data = results;
      this.setState({productos: api_data})
    })
  }

  componentDidMount() { // Cliclo de vida que llama a la función
    this.fetchData();
  }

  render() {
    return (
      //this.state.map((item, index)=>
      <div className="Product">
        <div className="Product-cover">
          <img src={this.props.imageURL} alt="" width={260} height={160} className="Product-image"/>
          <h3 className="Product-title">{this.props.name}</h3>
          <p className="Product-price">{this.props.price}</p>
          <button>COMPRAR</button>
        </div>
      </div>
      //)
    )
  }
}

// Exportando componente
export default Products;