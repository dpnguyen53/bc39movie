import { combineReducers } from "redux";
import listMovieReducer from "./../pages/HomeTemplate/ListMoviePage/duck/reducer";
import detailMovieReducer from "./../pages/HomeTemplate/DetailMoviePage/duck/reducer";
import authLoginReducer from "./../pages/AdminTemplate/AuthPage/duck/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authLoginReducer,
});

export default rootReducer;
