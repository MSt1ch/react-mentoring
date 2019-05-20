import React from 'react';
import { storiesOf } from '@storybook/react';

import css from '../src/components/FilmDescription/filmDescription.module.scss';

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

storiesOf('FilmDescription', module)
  .add('FilmDescription', () => {
    const {
        title,
        poster_path: posterPath,
        release_date: releaseDate,
        vote_average: voteAverage,
        runtime,
        tagline,
        overview
    } = data;

    return (
        <div style={ { backgroundColor: '#ce7291', padding: '40px', fontFamily: 'sans-serif' } }>
            <div className={ `${css.itemWrap } ${ css.headerWrap }` }>
                <img className={ css.itemImage } src={ posterPath } alt={ title }/>
                <div>
                    <h3 className={ css.itemTitle }>{ title } <span className={ css.itemVote }>{ voteAverage !== 0 ? voteAverage : 'N/A' }</span></h3>
                    <p className={ css.itemTag }>{ tagline }</p>
                    <div className={ css.itemData }>
                        <span className={ css.itemReleaseDate }>{ releaseDate && releaseDate.slice(0, 4) }</span>
                        { runtime && <span >{ runtime } min</span> }
                    </div>
                    <p className={ css.itemOverview }>{ overview }</p>
                </div>
            </div>
        </div>
    );
  });

