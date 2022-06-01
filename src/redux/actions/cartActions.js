import * as actionTypes from "../constants/cartConstants.js";

import axios from "axios";

export const addToCart =(id, qty)=> async (dispatch, getState) =>{
    const{data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            product: data._id,
            name: data.name,
            description: data.description,
            price: data.price,
            countInStock: data.countInStock,
            imageUrl: data.imageUrl,
            productType: data.productType,
            qty
        },

    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart =(id) => (dispatch, getState)=>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        parent: id
    });
    console.log(id);
    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
}
