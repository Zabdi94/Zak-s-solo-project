import axios from "axios";
import { takeEvery,put } from "redux-saga/effects";

function* getMovie (action) {
   console.log('this is SAGA action.payload is:',action.payload)
    try {
        let response = yield axios.get(`/api/movie/${action.payload}`)
        yield put ({type: 'MOVIE_API', payload: response.data.results })
    } catch (error) {
        console.log("error with element get request", error);
        yield put({ type: "FETCH_ERROR", payload: error });
    }
}

function* getMovieSaga () {
yield takeEvery('GET_API',getMovie)
}

export default getMovieSaga