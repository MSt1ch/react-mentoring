/* eslint-disable generator-star-spacing */
import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import {
    REQUEST_FILMSDATA,
    RECEIVE_FILMSDATA,
    RECEIVE_FILMSDATA_ERROR,
    CHANGE_SEARCH_DATA,
    CHANGE_SEARCHBY_PARAMETER,
    CHANGE_SORTBY_PARAMETER,
    REQUEST_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION_ERROR,
    RESET_FILMSDATA,
    RESET_SEARCH_DATA
} from '../constants/actionTypes';

export const fetchFilmsData = (film, activeSearchBy, activeSortBy, filter) => ({
    type: REQUEST_FILMSDATA,
    film, activeSearchBy, activeSortBy, filter
});

export const fetchFilmDescription = (id) => ({
    type: REQUEST_FILM_DESCRIPTION,
    id
});

function receiveFilmsData (similarFilms) {
    return {
        type: RECEIVE_FILMSDATA,
        similarFilms
    };
}

export const resetFilmsData = () => ({
    type: RESET_FILMSDATA,
    similarFilms: {}
});

export const setSearchText = text => ({
    type: CHANGE_SEARCH_DATA,
    text
});

export const resetSearchText = () => ({
    type: RESET_SEARCH_DATA,
    text: ''
});

export const setSearchByText = textSearchBy => ({
    type: CHANGE_SEARCHBY_PARAMETER,
    textSearchBy
});

export const setSortByText = textSortBy => ({
    type: CHANGE_SORTBY_PARAMETER,
    textSortBy
});

export function requestFilmDescription () {
    return {
        type: REQUEST_FILM_DESCRIPTION
    };
}

function receiveFilmDescription (similarFilm) {
    return {
        type: RECEIVE_FILM_DESCRIPTION,
        similarFilm
    };
}
export const activeFilter = state => state.content.activeSearchBy;
export const genres = state => state.filmDescription.filmDescriptionData.genres;

export function* fetchFilmDescriptionAsync ({ id }) {
    try {
        const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${id}`);
        const similarFilm = yield response.json();

        const activeSearchBy = yield select(activeFilter);
        const similarFilmGenres = yield select(genres);
        const response2 = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?sortBy=genres&sortOrder=desc&searchBy=${activeSearchBy}&filter=${similarFilmGenres}&limit=50`);
        const films = yield response2.json();

        yield put(receiveFilmsData(films));
        yield put(receiveFilmDescription(similarFilm));
    } catch (err) {
        yield put(RECEIVE_FILM_DESCRIPTION_ERROR, err);
    }
}

export function* watchFetchFilmDescription () {
    yield takeLatest(REQUEST_FILM_DESCRIPTION, fetchFilmDescriptionAsync);
    yield takeLatest(REQUEST_FILMSDATA, fetchFilmsDataAsync);
  }

export function* fetchFilmsDataAsync ({ film, activeSearchBy, activeSortBy, filter }) {
    try {
        if (film) {
            const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&search=${film}&searchBy=${activeSearchBy}&limit=50`);
            const films = yield response.json();

            return yield put(receiveFilmsData(films));
        }
        if (filter) {
            const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&searchBy=${activeSearchBy}&filter=${filter}&limit=50`);
            const films = yield response.json();

            return yield put(receiveFilmsData(films));
        } else {
            const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&searchBy=${activeSearchBy}&limit=50`);
            const films = yield response.json();

            return yield put(receiveFilmsData(films));
        }
    } catch (err) {
        yield put(RECEIVE_FILMSDATA_ERROR, err);
    }
  }
  export function* watchFetchFilmsData () {
    yield takeLatest(REQUEST_FILMSDATA, fetchFilmsDataAsync);
  }

// Users Saga
export function* filmsSaga () {
    yield all([
        watchFetchFilmDescription(),
        watchFetchFilmsData()
    ]);
  }
