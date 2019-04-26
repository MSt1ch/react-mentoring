import {
    REQUEST_FILMSDATA,
    RECEIVE_FILMSDATA,
    RECEIVE_FILMSDATA_ERROR,
    RESET_FILMSDATA,
    CHANGE_SORTBY_PARAMETER,
    CHANGE_SEARCH_DATA,
    CHANGE_SEARCHBY_PARAMETER,
    RESET_SEARCH_DATA
} from '../constants/actionTypes';

export default function searchFilmsData (
    state = {
        isFetching: false,
        filmsData: {},
        voteAverage: 'vote_average',
        releaseDate: 'release_date',
        activeSortBy: 'vote_average',
        value: '',
        title: 'title',
        genre: 'genres',
        activeSearchBy: 'title'
    },
    action
) {
    switch (action.type) {
        case REQUEST_FILMSDATA:
            return { ...state, isFetching: true };
        case RECEIVE_FILMSDATA:
            return { ...state, filmsData: action.similarFilms, isFetching: false };
        case RECEIVE_FILMSDATA_ERROR:
            return { ...state, filmsData: action.error, isFetching: false };
        case RESET_FILMSDATA:
            return { ...state, filmsData: action.similarFilms };
        case CHANGE_SORTBY_PARAMETER:
            return { ...state, activeSortBy: action.textSortBy };
        case CHANGE_SEARCH_DATA:
            return { ...state, value: action.text };
        case CHANGE_SEARCHBY_PARAMETER:
            return { ...state, activeSearchBy: action.textSearchBy };
        case RESET_SEARCH_DATA:
            return { ...state, value: action.text };
        default:
            return state;
    }
}
