import React from 'react';
import css from './filmItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class FilmItem extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        this.props.fetchFilmDescription(id);
        this.props.fetchFilmsData(null, 'genre', this.props.activeSortBy, this.props.genres);
    }

    render () {
        const { title, poster_path: posterPath, release_date: releaseDate, genres, id } = this.props;
        return (
            <div className={ css.filmItem }>
                <Link
                    to={ { pathname: `/film/${id}` } }
                    className={ css.filmImageWrap }
                    onClick={ () => this.handleClick(id) }
                >
                    <img src={ posterPath } alt={ title } />
                </Link>
                <div className={ css.filmDescription }>
                    <div className={ css.filmData }>
                        <span className={ css.filmTitle }>{ title }</span>
                        <span className={ css.filmdate }>{ releaseDate.slice(0, 4) }</span>
                    </div>
                    <p className={ css.filmGenre }>{ genres.join(' & ') }</p>
                </div>
            </div>
        );
    }
}

export default FilmItem;

FilmItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    id: PropTypes.number,
    fetchFilmDescription: PropTypes.func,
    fetchFilmsData: PropTypes.func,
    activeSortBy: PropTypes.string
};
