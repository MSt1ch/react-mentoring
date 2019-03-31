import React from 'react';
import css from './filmDescription.module.scss';
import PropTypes from 'prop-types';

const FilmDescription = ({
							 title,
							 poster_path: posterPath,
							 release_date: releaseDate,
							 runtime,
							 overview,
							 tagline,
							 vote_average: voteAverage
}) => {
    return (
        <div className={ `${css.itemWrap } ${ css.headerWrap }` }>
            <img className={ css.itemImage } src={ posterPath } alt={ title } height={ 450 }/>
            <div >
                <h3 className={ css.itemTitle }>{ title } <span className={ css.itemVote }>{ voteAverage }</span></h3>
                <p className={ css.itemTag }>{ tagline }</p>
                <div className={ css.itemData }>
                    <span className={ css.itemReleaseDate }>{ releaseDate && releaseDate.slice(0, 4) }</span>
                    <span >{ runtime } min</span>
                </div>
                <p className={ css.itemOverview }>{ overview }</p>
            </div>
        </div>
    );
};

export default FilmDescription;

FilmDescription.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number
};

