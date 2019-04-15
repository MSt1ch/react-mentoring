import {
    REQUEST_FILMSDATA,
    RECEIVE_FILMSDATA,
    RECEIVE_FILMSDATA_ERROR,
    CHANGE_SEARCH_DATA,
    CHANGE_SEARCHBY_PARAMETER,
    CHANGE_SORTBY_PARAMETER,
    REQUEST_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION_ERROR
} from './constants/actionTypes';

export function requestFilmsData () {
    return {
        type: REQUEST_FILMSDATA
    };
}

function receiveFilmsData (json) {
    return {
        type: RECEIVE_FILMSDATA,
        payload: json
    };
}

function receiveFilmsDataError (error) {
    return {
        type: RECEIVE_FILMSDATA_ERROR,
        payload: error
    };
}

export function fetchFilmsData (film, activeSearchBy, activeSortBy) {
    return dispatch => {
        dispatch(requestFilmsData());
        return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${activeSortBy}&sortOrder=desc&search=${film}&searchBy=${activeSearchBy}&limit=50`)
            .then(res => res.json())
            .then(json => dispatch(receiveFilmsData(json)))
            .catch(error => dispatch(receiveFilmsDataError(error)));
    };
}

export const setSearchText = text => ({
    type: CHANGE_SEARCH_DATA,
    payload: text
});

export const setSearchByText = text => ({
    type: CHANGE_SEARCHBY_PARAMETER,
    payload: text
});

export const setSortByText = text => ({
    type: CHANGE_SORTBY_PARAMETER,
    payload: text
});

export function requestFilmDescription () {
    return {
        type: REQUEST_FILM_DESCRIPTION
    };
}

function receiveFilmDescription (json) {
    return {
        type: RECEIVE_FILM_DESCRIPTION,
        payload: json
    };
}

function receiveFilmDescriptionError (error) {
    return {
        type: RECEIVE_FILM_DESCRIPTION_ERROR,
        payload: error
    };
}

export function fetchFilmDescription (id) {
    return dispatch => {
        dispatch(requestFilmDescription());
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(json => dispatch(receiveFilmDescription(json)))
            .catch(error => dispatch(receiveFilmDescriptionError(error)));
    };
}
