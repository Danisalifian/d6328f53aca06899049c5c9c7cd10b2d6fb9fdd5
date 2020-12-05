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

export const addToCart = (Item) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: Item,
  });
};

export const getLocalDate = () => (dispacth) => {
  let start = Date.now();
  let days = 14;
  let dates = [];
  for (let i = 0; i < days; i++) {
    let days = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    let dateObj = {
      id: i + 0,
      fullDate: new Date(start + i * 1000 * 60 * 60 * 24).toDateString(),
      date: new Date(start + i * 1000 * 60 * 60 * 24).getDate(),
      day: days[new Date(start + i * 1000 * 60 * 60 * 24).getDay()],
      month: months[new Date(start + i * 1000 * 60 * 60 * 24).getMonth()],
      year: new Date(start + i * 1000 * 60 * 60 * 24).getFullYear(),
    };

    dates.push(dateObj);
  }
  dispacth({
    type: types.LOAD_DATE,
    payload: dates,
  });
};

export const selectedDate = (date) => (dispatch) => {
  dispatch({
    type: types.SET_DATE,
    payload: date,
  });
};
