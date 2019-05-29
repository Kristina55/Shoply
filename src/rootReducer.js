import jsonData from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

let data = Object.values(jsonData.products);

const INITIAL_STATE = {
  productsList: data,
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== action.payload.name)
      };
    default:
      return state;
  }
}

export default rootReducer;
