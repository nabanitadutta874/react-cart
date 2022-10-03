import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from './productCard/ProductCard';

function Home() {
  const state = useSelector((state) => state);
  console.log(state)

  const productList = [
    { productName: 'rose', key: 'prod-1' },
    { productName: 'tulip', key: 'prod-2' },
    { productName: 'marygold', key: 'prod-3' },
    { productName: 'orchid', key: 'prod-4' },
    { productName: 'sunflower', key: 'prod-5' },
    { productName: 'jasmin', key: 'prod-6' },
    { productName: 'daisy', key: 'prod-7' },
    { productName: 'iris', key: 'prod-8' },
    { productName: 'bluebell', key: 'prod-9' },
    { productName: 'aster', key: 'prod-10' },
  ];

  return (
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
  );
}

export default Home;
