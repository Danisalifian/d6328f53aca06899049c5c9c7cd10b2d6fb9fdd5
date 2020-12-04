import * as types from "../types";

const initialState = {
  products: [],
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
    default:
      return state;
  }
};
