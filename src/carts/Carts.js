import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './cartItem/CartItem';

function Carts() {
  const state = useSelector((state) => state);
  console.log(state.itemList);
  const products = state.itemList.includes(' ')
    ? state.itemList.split(' ')
    : state.itemList;
  return (
    <Container>
      <Card style={{ marginTop: '5px' }}>
        <Card.Body>
          <Card.Title>Cart Details</Card.Title>
          <Row>
            {products.length > 1
              ? products.map((elem, index) => {
                  console.log(elem);
                  return (
                    <Col sm={4} key={index} style={{ margin: 0 }}>
                      <CartItem prodKey={elem} />
                    </Col>
                  );
                })
              : 'no items to show'}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Carts;
