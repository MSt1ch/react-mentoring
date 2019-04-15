import React from 'react';
import css from './filterSection.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button';
import { connect } from 'react-redux';
import { setSortByText } from '../../actions';

class FilterSection extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (text) {
        this.props.setSortByText(text);
    }

    render () {
        const { total, rating, releaseDate, activeSortBy } = this.props;
        return (
            <div className={ css.resultSectionWrap }>
                    <div className={ css.resultSection }>
                        {
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
                        }
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rating: state.sort.voteAverage,
        releaseDate: state.sort.releaseDate,
        activeSortBy: state.sort.activeSortBy
    };
};

const mapDispatchToProps = {
    setSortByText
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);

FilterSection.propTypes = {
    total: PropTypes.number,
    rating: PropTypes.string,
    releaseDate: PropTypes.string,
    activeSortBy: PropTypes.string,
    setSortByText: PropTypes.func
};
