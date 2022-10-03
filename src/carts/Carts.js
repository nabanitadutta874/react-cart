import React from 'react';
import {productList} from '../asset/productList.js'
import { Container, Row, Col } from 'react-bootstrap';

function Carts() {
  return(
    <Container>
      <Row className="justify-content-center" style={{ margin: 0 }}>
        {productList.map((elem) => {
          return (
            <Col sm={4} key={elem.key} style={{ margin: 0 }}>
              <ProductCard product={elem} />
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

export default Carts;
