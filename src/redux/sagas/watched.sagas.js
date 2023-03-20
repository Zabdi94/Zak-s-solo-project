import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchMovies() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/watched",
    });
   // console.log("gets all shows", response.data);
    yield put({
      type: "SET_WATCHED",
      payload: response.data,
    });
  } catch {
    console.error("error in GET SHOWS SAGAS");
  }
}

function* addMovie(action) {
  console.log("in add", action.payload);
  yield axios({
    method: "POST",
    url: "/api/watched",
    data: action.payload,
  });
}

function* deleteMovie(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/watched/${action.payload}`,
    });
    yield put({
      type: "FETCH_MOVIES",
    });
  } catch (error) {
    console.log("error with element get request", error);
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* updateMovie(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/watched/${action.payload}`,
    });
    yield put({
      type: "FETCH_MOVIES",
    });
  } catch (error) {
    console.log("error with element get request", error);
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* watchedSagas() {
  yield takeEvery("FETCH_MOVIES", fetchMovies);
  yield takeEvery("ADD_MOVIE", addMovie);
  yield takeEvery("DELETE_MOVIE", deleteMovie);
  yield takeEvery("UPDATE_MOVIE", updateMovie);
}
export default watchedSagas;
