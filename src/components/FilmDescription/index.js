import React from 'react';
import css from './filmDescription.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FilmDescription extends React.Component {
    render () {
        const {
            title,
            poster_path: posterPath,
            release_date: releaseDate,
            runtime,
            overview,
            tagline,
            vote_average: voteAverage
        } = this.props.filmDescriptionData;
        return (
            <>
                { this.props.filmDescriptionData.title &&
                    <>
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
                    </>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        filmDescriptionData: state.filmDescription.filmDescriptionData
    };
};

export default connect(mapStateToProps)(FilmDescription);

FilmDescription.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    filmDescriptionData: PropTypes.object
};

