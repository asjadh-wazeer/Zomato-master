import axios from "axios";

// Redux Reducer Types
import { GET_REVIEWS, POST_REVIEWS } from "./restaurant.type";

export const getRestaurant = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `http://localhost:4000/reviews/${resId}`,
    });

    return dispatch({ type: GET_REVIEWS, payload: reviewList.data });
  } catch (error) {
    return console.log(error);
  }
};

export const getSpecificRestaurant = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `http://localhost:4000/reviews/new`,
      data: { reviewData },
    });

    return dispatch({
      type: POST_REVIEWS,
      payload: reviewData,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
