import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/CartActions';

function ProductCard(props) {
  const dispatch = useDispatch();

  /*  const [productAdded, setProductAdded] = false;*/
  return (
    <Card style={{ marginTop: '5px' }}>
      {/* <Card.Img variant="top" src="" /> */}
      <Card.Body>
        <Card.Title>{props.product.productName}</Card.Title>
        <Button
          variant="primary"
          onClick={() => {
            console.log(props.product)
            dispatch(addItem(props.product));
          }}
        >
          addToCart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
