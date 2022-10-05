import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Carts() {
  const state = useSelector((state) => state);
  const products = state.itemList.includes(' ')
    ? state.itemList.split('  ')
    : [state.itemList];
  return (
    <Container>
      <Card style={{ marginTop: '5px' }}>
        <Card.Body>
          <Card.Title>Product details</Card.Title>
          {products.map((elem) => {
            return <h2>{elem}</h2>;
          })}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Carts;
