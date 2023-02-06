import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailMovie } from "./duck/actions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader";

export default function DetailMoviePage() {
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const data = useSelector((state) => state.detailMovieReducer.data);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchDetailMovie(params.id));
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h3>{data && data.tenPhim}</h3>
    </div>
  );
}
