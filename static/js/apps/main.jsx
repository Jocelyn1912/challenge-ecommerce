import React from 'react';
import { render } from 'react-dom';
import Products from './../../../src/components/Products/Products.js';
import data from './../../../data/mock.json';

const App = ({ message }) => <div>{ message }</div>;
const containerProducts = document.getElementById('cart');

render(<App message="Product List" />, document.getElementById('app'));
render(<Products/>, containerProducts);


