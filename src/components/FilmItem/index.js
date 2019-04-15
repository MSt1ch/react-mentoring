import React from 'react';
import css from './filmItem.module.scss';
import PropTypes from 'prop-types';

class FilmItem extends React.Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (id) {
        this.props.fetchFilmDescription(id);
    }

    render () {
        const { title, poster_path: posterPath, release_date: releaseDate, genres, id } = this.props;
        return (
            <div className={ css.filmItem }>
                <div className={ css.filmImageWrap } onClick={ () => this.handleClick(id) }>
                    <img src={ posterPath } alt={ title } />
                </div>
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
    fetchFilmDescription: PropTypes.func
};
