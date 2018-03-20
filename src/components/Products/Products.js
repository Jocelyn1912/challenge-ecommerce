// Importando React
import React, {Component} from 'react';
import './Products.css';
import { render } from 'react-dom';

import data from './../../../data/mock.json';

/* Renderizado para mostrar los datos en la web */
class Products extends Component {
  render() {
    return (
      <div className="Product">
        <div className="Product-cover">
          <img src={this.props.imageURL} alt="" width={260} height={160} className="Product-image"/>
          <h3 className="Product-title">{this.props.name}</h3>
          <p className="Product-price">{this.props.price}</p>
          <button>COMPRAR</button>
        </div>
      </div>
    )
  }
}

// Exportando componente
export default Products;