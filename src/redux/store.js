 import {createStore, combineReducers, applyMiddleware} from "redux";
 import thunk from 'redux-thunk'
 import {composeWithDevTools} from "redux-devtools-extension";

 import{ cartReducer} from "./reducers/cartReducers.js";
import { getProductDetailsReducer, getProductsReducer } from "./reducers/productReducers.js";

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;