import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    // REQUEST DATA TO THE PAYLOAD
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    // IF SUCESSFUL SEND THE DATA TO THE PAYLOAD
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    // SEND ERROR TO THE PAYLOAD
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
