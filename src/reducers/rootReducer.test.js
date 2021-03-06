import * as types from '../constants/actionTypes';
import searchFilmDescription from '../reducers/searchFilmDescription';
import searchFilmsData from '../reducers/searchFilmsData';


describe('searchFilmsData reducer tests', () => {
    const searchFilmsDataState = {
        isFetching: false,
        filmsData: {},
        voteAverage: 'vote_average',
        releaseDate: 'release_date',
        activeSortBy: 'vote_average',
        value: '',
        title: 'title',
        genre: 'genre',
        activeSearchBy: 'title'
    };

    it('should set initial state for searchFilmsData', () => {
        expect(
        searchFilmsData(
            undefined,
            {
                type: undefined
            })
        ).toEqual(searchFilmsDataState);
    });
    it('should handle current data', () => {
        expect(
            searchFilmsData(
                {},
                {
                    type: types.REQUEST_FILMSDATA,
                    isFetching: true
                })
        ).toEqual({ isFetching: true });

        expect(
            searchFilmsData({}, {
                type: types.RECEIVE_FILMSDATA,
                isFetching: false
            })
        ).toEqual({ isFetching: false, filmsData: undefined });

        expect(
            searchFilmsData({},
                {
                    type: types.RECEIVE_FILMSDATA_ERROR,
                    isFetching: false
                })

        ).toEqual({ isFetching: false, filmsData: undefined });
    });
});

describe('inputSearch reducer tests', () => {
    const inputSearchState = {
        isFetching: false,
        filmsData: {},
        voteAverage: 'vote_average',
        releaseDate: 'release_date',
        activeSortBy: 'vote_average',
        value: '',
        title: 'title',
        genre: 'genre',
        activeSearchBy: 'title'
    };

    it('should set initial state for inputSearch', () => {
        expect(
            searchFilmsData(undefined, { type: undefined })
        ).toEqual(inputSearchState);
    });

    it('should change search text', () => {
        const text = 'search text';
        expect(
            searchFilmsData({},
                {
                    type: types.CHANGE_SEARCH_DATA,
                    text
                })
        ).toEqual({ value: text });
    });

    it('should change searchBy parameter', () => {
        const parameter = 'name';
        expect(
            searchFilmsData({},
                {
                    type: types.CHANGE_SEARCHBY_PARAMETER,
                    textSearchBy: parameter
                })
        ).toEqual({ activeSearchBy: parameter });
    });
});

describe('sort reducer tests', () => {
    const sortState = {
        isFetching: false,
        filmsData: {},
        voteAverage: 'vote_average',
        releaseDate: 'release_date',
        activeSortBy: 'vote_average',
        value: '',
        title: 'title',
        genre: 'genre',
        activeSearchBy: 'title'
    };

    it('should set initial state for sort', () => {
        expect(
            searchFilmsData(undefined,
                {
                    type: undefined
                })
        ).toEqual(sortState);
    });

    it('should change sortBy parameter', () => {
        const parameter = 'rating';
        expect(
            searchFilmsData({},
                {
                    type: types.CHANGE_SORTBY_PARAMETER,
                    textSortBy: parameter
                })
        ).toEqual({ activeSortBy: parameter });
    });
});

describe('searchFilmDescription reducer tests', () => {

    it('should set initial state for  searchFilmDescription', () => {
        const searchFilmDescriptionState = {
            isFetching: false,
            filmDescriptionData: {}
        };
        expect(
            searchFilmDescription(undefined,
                {
                    type: undefined
                })
        ).toEqual(searchFilmDescriptionState);
    });

    it('should handle currend film data', () => {
        expect(
            searchFilmDescription({},
                {
                    type: types.REQUEST_FILM_DESCRIPTION,
                    isFetching: true
                })
        ).toEqual({ isFetching: true });

        expect(
            searchFilmDescription({},
                {
                    type: types.RECEIVE_FILM_DESCRIPTION,
                    isFetching: false
                })
        ).toEqual({ isFetching: false, filmDescriptionData: undefined });

        expect(
            searchFilmDescription({},
                {
                    type: types.RECEIVE_FILM_DESCRIPTION_ERROR,
                    isFetching: false
                })
        ).toEqual({ isFetching: false, filmDescriptionData: undefined });
    });
});

