import { ADD_ITEM } from '../actionTypes/actionTypes';

const addItem = (product) => ({
  
    type: ADD_ITEM,
    product: product
  
});

export { addItem };
