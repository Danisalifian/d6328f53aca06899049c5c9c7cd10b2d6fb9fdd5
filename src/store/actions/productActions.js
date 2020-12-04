import dummyData from "../../data/product.json";
import * as types from "../types";

export const fetchProduct = () => async (dispatch) => {
  dispatch({ type: types.LOADING });
  let products = [];
  products = dummyData;
  dispatch({
    type: types.GET_PRODUCT,
    payload: products,
  });
};
