import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CartItem from './cartItem/CartItem';

function Carts() {
  const state = useSelector((state) => state);
  const products = state.itemList.includes(' ')
    ? state.itemList.split(' ')
    : [state.itemList];
  return (
    <Container>
      
      <Card style={{ marginTop: '5px' }}>
        <Card.Body>
          <Card.Title>Cart Details</Card.Title>
          <Row >
          {products.map((elem, index) => {
            return <Col sm={4} key={index} style={{ margin: 0 }}><CartItem prodKey={elem}  />
            </Col>
          })}
          </Row>
        </Card.Body>
      </Card>
      
    </Container>
  );
}

export default Carts;
