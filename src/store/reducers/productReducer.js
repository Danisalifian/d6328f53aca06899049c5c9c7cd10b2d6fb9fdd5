import * as types from "../types";

const initialState = {
  products: [],
  cart: [],
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
