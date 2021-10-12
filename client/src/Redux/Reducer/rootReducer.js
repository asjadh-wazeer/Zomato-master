import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/Image.reducer";
import review from "./Reviews/reviews.reducer";
import user from "./User/user.reducer";

const rootReducer = combineReducers({
  restaurant,
  image,
  review,
  user,
});

export default rootReducer;
