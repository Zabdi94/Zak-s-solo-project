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

    // Retrieve the API key from the environment variable
    const apiKey = process.env.REACT_APP_API_KEY;

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
  } catch {
    console.error("error in GET MOVIES SAGA");
  }
}

// ...rest of the code

function* watchedSagas() {
  yield takeLatest("FETCH_MOVIES", fetchMovies);
  yield takeLatest("ADD_MOVIE", addMovie);
  yield takeLatest("DELETE_MOVIE", deleteMovie);
  yield takeLatest("UPDATE_MOVIE", updateMovie);
}

export default watchedSagas;
