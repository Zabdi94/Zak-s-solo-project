import { takeEvery, put } from "redux-saga/effects";
import axios from 'axios';

function* fetchMovies() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/watched'
        });
        console.log('gets all shows', response.data);
        yield put ({
            type: "SET_SHOWS",
            payload: response.data,
        });
    } catch {
        console.error('error in GET SHOWS SAGAS');
    }
}


function* watchedSagas() {
    yield takeEvery("FETCH_MOVIES", fetchMovies)
}
export default watchedSagas;