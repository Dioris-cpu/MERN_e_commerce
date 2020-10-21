import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initalstate = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
