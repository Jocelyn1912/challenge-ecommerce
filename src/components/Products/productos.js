import React, {Component} from 'react';
import Product from './Products.js';

class Productos extends Component{
  render() {
    const datos = this.props.data.mock;
    console.log(this.props.data.mock);
    return (
      <div>
        {
          datos.map((info) => {
            return <Product title={info.name} image={info.imageURL} price={info.price}/>
          })
        }
      </div>
    )
  }
}

export default Productos;