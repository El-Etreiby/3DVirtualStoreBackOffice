import * as actionTypes from "../constants/cartConstants";

// redeucer function takes input a state parameter that consists of state and action
export const cartReducer = (state={cartItems: []}, action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const itemExists = state.cartItems.find((x)=>x.product === item.product);
            if(itemExists){
                return{
                    ...state,
                    cartItems: state.cartItems.map(
                        (x)=> x.product === itemExists.product ? item: x
                    )
                };
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.product !== action.payload
                )
            };


        default:
            return state;
    }



}
