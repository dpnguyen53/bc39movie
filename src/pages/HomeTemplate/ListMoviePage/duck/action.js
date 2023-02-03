import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
} from "./types";
import api from "./../../../../utils/apiUtil.js";

export const actFetchData = () => {
  return (dispatch) => {
    //request
    dispatch(actListMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => {
        //success
        dispatch(actListMovieSuccess(result.data.content));
      })
      .catch((error) => {
        //fail
        dispatch(actListMovieFail(error));
      });
  };
};

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFail = (error) => {
  return {
    type: LIST_MOVIE_FAIL,
    payload: error,
  };
};
