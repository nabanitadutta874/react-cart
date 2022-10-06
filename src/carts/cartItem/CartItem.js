import React from 'react';
import { Card } from 'react-bootstrap';
import {productList} from './../../asset/productList.js'

function CartItem(props) {
  const product = productList.find((elem) => {
    return elem.key === props.prodKey.trimStart()})
  return (
    <Card style={{ marginTop: '5px' }}>
    {
    product ? 
    <Card.Body>
      <Card.Title>{product?.productName}</Card.Title>
      <button
      >buyNow
      </button>
    </Card.Body>
  
  :<></>
  }
  </Card> 
  );
}

export default CartItem;
