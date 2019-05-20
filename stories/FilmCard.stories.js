import React from 'react';
import { storiesOf } from '@storybook/react';

import css from '../src/components/FilmItem/filmItem.module.scss';

const data = {
    budget: 94000000,
    genres: ["Action", "Adventure"],
    id: 338970,
    overview: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    poster_path: "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
    release_date: "2018-03-08",
    revenue: 126025000,
    runtime: 118,
    tagline: "Her legend begins",
    title: "Tomb Raider",
    vote_average: 6.2,
    vote_count: 817
};

storiesOf('FilmCard', module)
  .add('FilmCard', () => {
    const { title, poster_path: posterPath, release_date: releaseDate, genres } = data;
    return (
        <div style={ { padding: '30px', fontFamily: 'sans-serif' } }>
            <div className={ css.filmItem } style={ { width: '300px' } }>
                <div className={ css.filmImageWrap }>
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
        </div>
    );
  });

