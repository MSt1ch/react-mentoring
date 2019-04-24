import {
    REQUEST_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION,
    RECEIVE_FILM_DESCRIPTION_ERROR
} from '../constants/actionTypes';

export default function searchFilmDescription (
    state = {
        isFetching: false,
        filmDescriptionData: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_FILM_DESCRIPTION:
            return { ...state, isFetching: true };
        case RECEIVE_FILM_DESCRIPTION:
            return { ...state, filmDescriptionData: action.similarFilm, isFetching: false };
        case RECEIVE_FILM_DESCRIPTION_ERROR:
            return { ...state, filmDescriptionData: action.errror, isFetching: false };
        default:
            return state;
    }
}
