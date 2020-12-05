import * as types from "../types";
const moment = require("moment");
var idLocale = require("moment/locale/id");

moment.defineLocale("id", idLocale);

const initialState = {
  products: [],
  cart: [],
  loading: false,
  dates: [],
  dateTime: {
    day: moment().format("dddd"),
    month: moment().format("MMMM"),
    year: moment().format("YYYY"),
    date: moment().format("D"),
  },
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
    case types.LOAD_DATE:
      return {
        ...state,
        dates: action.payload,
        loading: false,
      };
    case types.SET_DATE:
      return {
        ...state,
        dateTime: action.payload,
      };
    default:
      return state;
  }
};
