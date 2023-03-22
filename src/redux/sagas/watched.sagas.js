import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

function* fetchMovies() {
  try {
    const response = yield call(axios.get, "/api/watched");
    console.log("Res.data", response.data);
    const movieIds = response.data.map((movie) => movie.films_id);
    const apiKey = "4b9adf7ac5e5c767b6d4500c39004e62";

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

// function* fetchMovies() {
// try {
//     // List of movie IDs to retrieve
//     const movieIds = [315162, 505642, 804150, 631842, 594767];
//     const url = "https://api.themoviedb.org/3/movie/";
//     // TMDB API key
//     const apiKey = "4b9adf7ac5e5c767b6d4500c39004e62";
//     // List to store the retrieved movie data
//     const movies = [];
//     console.log("IDD", movieIds);
//     // Loop through the movie IDs and make an API call for each one
//     for (let i = 0; i < movieIds.length; i++) {
//       const movieId = movieIds[i];
//       const fullUrl = `${url}${movieId}?api_key=${apiKey}&language=en-US`;
//       const response = yield call(axios.get, fullUrl);
//       if (response.status === 200) {
//         movies.push(response.data);
//       }
//     }
//     yield put({
//       type: "SET_MOVIES",
//       payload: movies.i,
//     });
//   } catch (error) {
//     console.error("Error in fetchMovies saga:", error);
//   }
// }

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
