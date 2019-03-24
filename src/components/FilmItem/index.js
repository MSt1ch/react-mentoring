import React from 'react';
import css from './filmItem.module.scss';
import PropTypes from 'prop-types';

const FilmItem = ({ title, poster_path: posterPath, release_date: releaseDate, genres }) => {
    return (
        <a href="#" className={css.filmItem}>
            <img src={posterPath} alt={title} width={300}/>
            <div className={css.filmDescription}>
                <div className={css.filmData}>
                    <span className={css.filmTitle}>{ title }</span>
                    <span className={css.filmdate}>{ releaseDate.slice(0, 4) }</span>
                </div>
                <p className={css.filmGenre}>{ genres.join(' & ') }</p>
            </div>
        </a>
    );
};

export default FilmItem;

FilmItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};
