import { GET_REVIEWS, POST_REVIEWS } from "./restaurant.type";

const initialState = {
  reviews: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;
