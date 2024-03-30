import axios from "axios";

import * as actionTypes from "../constants/productConstant";

const URL = "http://localhost:7000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    // console.log(response) or data;
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    // console.log("Error while calling getProducts api", error.message);
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
