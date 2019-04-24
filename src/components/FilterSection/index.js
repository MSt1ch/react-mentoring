import React from 'react';
import css from './filterSection.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import { connect } from 'react-redux';
import { setSortByText, fetchFilmsData } from '../../actions/actions';
import { Route, Switch } from 'react-router-dom';

class FilterSection extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (text) {
        this.props.setSortByText(text);
        this.props.fetchFilmsData(this.props.value, this.props.activeSearchBy, text);
    }

    render () {
        const { total, rating, releaseDate, activeSortBy, genres } = this.props;
        return (
            <div className={ css.resultSectionWrap }>
                    <div className={ css.resultSection }>
                        <Switch>
                            <Route exact path={ ["/", "/search"] } render={ () => (
                                total > 0 &&
                                <>
                                    <span>{ total } movies found</span>
                                    <div className={ css.resultSortBy }>
                                        <span>Sort by:</span>
                                        <Button
                                            name="release date"
                                            transparentActive={ releaseDate === activeSortBy }
                                            transparent
                                            onClick={ () => this.handleClick(releaseDate) }
                                        />
                                        <Button
                                            name="rating"
                                            transparent
                                            transparentActive={ rating === activeSortBy }
                                            onClick={ () => this.handleClick(rating) }
                                        />
                                    </div>
                                </>
                             ) } />
                            <Route exact path="/film/:id" render={ () => genres && <span>Films By { genres.join(' & ') } genre</span> }/>
                        </Switch>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rating: state.content.voteAverage,
        releaseDate: state.content.releaseDate,
        activeSortBy: state.content.activeSortBy,
        genres: state.filmDescription.filmDescriptionData.genres,
        value: state.content.value,
        activeSearchBy: state.content.activeSearchBy
    };
};

const mapDispatchToProps = {
    setSortByText,
    fetchFilmsData
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);

FilterSection.propTypes = {
    total: PropTypes.number,
    rating: PropTypes.string,
    genres: PropTypes.array,
    releaseDate: PropTypes.string,
    activeSortBy: PropTypes.string,
    setSortByText: PropTypes.func,
    match: PropTypes.object,
    fetchFilmsData: PropTypes.func,
    value: PropTypes.string,
    activeSearchBy: PropTypes.string
};
