import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function* fetchMovies() {
  try {
    console.log("FETCH_MOVIES action dispatched");
    const response = yield call(axios.get, "/api/watched");
    console.log("Res.data", response.data);
    const movieIds = response.data.map((movie) => movie.films_id);
    const apiKey = "4b9adf7ac5e5c767b6d4500c39004e62";

    yield put({
      type: "CLEAR_MOVIE",
    });
    for (const movieId of movieIds) {
      const movieResponse = yield call(
        axios.get,
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      const movieData = movieResponse.data;
      console.log("Movie data", movieData);

      yield put({
        type: "SET_WATCHED",
        payload: movieData,
      });
    }

    //console.log("Res.data", response.data);
  } catch {
    console.error("error in GET MOVIES SAGA");
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
  const swal = withReactContent(Swal);

  try {
    let sweetResult = yield swal.fire({
      title: "Are you sure you want to delete this item from your watchlist?",
      confirmButtonColor: "#263567",
      cancelButtonColor: "#a50104",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
    });
    if (sweetResult.isConfirmed) {
      yield axios({
        method: "DELETE",
        url: `/api/watched/${action.payload}`,
      });

      yield put({ type: "FETCH_MOVIES" });
    }
  } catch (error) {
    console.error(error);
  }
}

function* updateMovie(action) {
  try {
    yield axios.put(`/api/watched/${action.payload.id}`, {
      rating: action.payload.rating,
    });
    yield put({ type: "FETCH_MOVIES" });
  } catch (error) {
    console.log("Error updating movie:", error);
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* watchedSagas() {
  yield takeLatest("FETCH_MOVIES", fetchMovies);
  yield takeLatest("ADD_MOVIE", addMovie);
  yield takeLatest("DELETE_MOVIE", deleteMovie);
  yield takeLatest("UPDATE_MOVIE", updateMovie);
}
export default watchedSagas;
