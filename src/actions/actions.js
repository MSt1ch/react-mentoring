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

export function requestFilmsData () {
    return {
        type: REQUEST_FILMSDATA
    };
}

function receiveFilmsData (similarFilms) {
    return {
        type: RECEIVE_FILMSDATA,
        similarFilms
    };
}

function receiveFilmsDataError (error) {
    return {
        type: RECEIVE_FILMSDATA_ERROR,
        error
    };
}

export function fetchFilmsData (film, activeSearchBy, activeSortBy, filter) {
    return dispatch => {
        dispatch(requestFilmsData());
        if (film) {
            return fetch(
                `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&search=${film}&searchBy=${activeSearchBy}&limit=50`)
                .then(res => res.json())
                .then(json => dispatch(receiveFilmsData(json)))
                .catch(error => dispatch(receiveFilmsDataError(error)));
        }
        if (filter) {
            return fetch(
                `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&searchBy=${activeSearchBy}&filter=${filter}&limit=50`)
                .then(res => res.json())
                .then(json => dispatch(receiveFilmsData(json)))
                .catch(error => dispatch(receiveFilmsDataError(error)));
        }
        return fetch(
            `https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&searchBy=${activeSearchBy}&limit=50`)
            .then(res => res.json())
            .then(json => dispatch(receiveFilmsData(json)))
            .catch(error => dispatch(receiveFilmsDataError(error)));
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

function receiveFilmDescriptionError (error) {
    return {
        type: RECEIVE_FILM_DESCRIPTION_ERROR,
        error
    };
}

export function fetchFilmDescription (id) {
    return (dispatch, getState) => {
        dispatch(requestFilmDescription());
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(similarFilm => {
                dispatch(receiveFilmDescription(similarFilm));
                return similarFilm.genres;
            })
            .catch(error => dispatch(receiveFilmDescriptionError(error)))
            .then(genres => dispatch(fetchFilmsData(null, getState().content.activeSearchBy, 'genres', genres)));
    };
}
