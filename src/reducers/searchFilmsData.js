import {
    REQUEST_FILMSDATA,
    RECEIVE_FILMSDATA,
    RECEIVE_FILMSDATA_ERROR
} from '../constants/actionTypes';

export default function searchFilmsData (
    state = {
        isFetching: false,
        filmsData: {}
    },
    action
) {
    switch (action.type) {
        case REQUEST_FILMSDATA:
            return { ...state, isFetching: true };
        case RECEIVE_FILMSDATA:
            return { ...state, filmsData: action.payload, isFetching: false };
        case RECEIVE_FILMSDATA_ERROR:
            return { ...state, filmsData: action.payload, isFetching: false };
        default:
            return state;
    }
}
