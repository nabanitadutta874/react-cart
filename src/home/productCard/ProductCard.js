import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/CartActions';
import { useSelector } from 'react-redux';

function ProductCard(props) {
  const state = useSelector((state) => state);
  const [buttonDisable, setButtonDisable] = useState(false);
  const buttonFlag = () => {
    setButtonDisable(state.itemList.includes(props.product.key));
  };
  useEffect(() => {
    buttonFlag();
  });

  const dispatch = useDispatch();

  /*  const [productAdded, setProductAdded] = false;*/
  return (
    <Card style={{ marginTop: '5px' }}>
      <Card.Body>
        <Card.Title>{props.product.productName}</Card.Title>
        <Button
          disabled={buttonDisable}
          variant="primary"
          onClick={() => {
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
