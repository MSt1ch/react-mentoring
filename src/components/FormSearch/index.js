import React from 'react';
import css from './formSearch.module.scss';
import InputSearch from '../InputSearch';
import Button from '../Button';
import { connect } from 'react-redux';
import { setSearchText, fetchFilmsData, setSearchByText } from '../../actions';
import PropTypes from 'prop-types';

const textCategory = 'search by';

class FormSearch extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (text) {
        this.props.setSearchByText(text);
    }

    render () {
        const { title, genre, value, activeSearchBy, activeSortBy, setSearchText } = this.props;
        return (
        <form
            className={ css.searchWrap }
            onSubmit={
                e => {
                    e.preventDefault();
                    if (value !== '') {
                        this.props.fetchFilmsData(value, activeSearchBy, activeSortBy);
                    }
                }
            }
        >
            <InputSearch value={ value } setSearchText={ setSearchText }/>
            <div className={ css.searchButtonsWrap }>
                <div className={ css.category }>
                    <span>{ textCategory }</span>
                    <Button
                        type="button"
                        name={ title }
                        active={ title === activeSearchBy }
                        onClick={ () => this.handleClick(title) }
                    />
                    <Button
                        type="button"
                        name={ genre }
                        wide
                        onClick={ () => this.handleClick(genre) }
                        active={ genre === activeSearchBy }
                    />
                </div>
                <Button name="search" extraWide active type="submit"/>
            </div>
        </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.search.value,
        title: state.search.title,
        genre: state.search.genre,
        activeSearchBy: state.search.activeSearchBy,
        activeSortBy: state.sort.activeSortBy
    };
};

const mapDispatchToProps = {
    setSearchText,
    fetchFilmsData,
    setSearchByText
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch);

FormSearch.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    setSearchText: PropTypes.func,
    fetchFilmsData: PropTypes.func,
    setSearchByText: PropTypes.func,
    activeSearchBy: PropTypes.string,
    activeSortBy: PropTypes.string
};
