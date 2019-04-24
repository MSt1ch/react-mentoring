import React from 'react';
import css from './formSearch.module.scss';
import InputSearch from '../InputSearch';
import Button from '../Button';
import { connect } from 'react-redux';
import { setSearchText, fetchFilmsData, setSearchByText } from '../../actions/actions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

const textCategory = 'search by';

class FormSearch extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        const queryParams = queryString.parse(this.props.location.search);
        let { filmName } = queryParams;

        if (queryParams.filmName) {
            this.props.setSearchText(filmName);
        }
    }

    handleClick (text) {
        this.props.setSearchByText(text);
    }

    render () {
        const { title, genre, value, activeSearchBy, activeSortBy, setSearchText, fetchFilmsData, history } = this.props;
        return (
        <form
            className={ css.searchWrap }
            onSubmit={
                e => {
                    e.preventDefault();
                    if (value !== '') {
                        fetchFilmsData(value, activeSearchBy, activeSortBy);
                        history.push("/search");
                        history.push({
                            search: `filmName=${value}&searchBy=${activeSearchBy}&sortBy=${activeSortBy}`
                        });
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
        value: state.content.value,
        title: state.content.title,
        genre: state.content.genre,
        activeSearchBy: state.content.activeSearchBy,
        activeSortBy: state.content.activeSortBy
    };
};

const mapDispatchToProps = {
    setSearchText,
    fetchFilmsData,
    setSearchByText
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormSearch));

FormSearch.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    setSearchText: PropTypes.func,
    fetchFilmsData: PropTypes.func,
    setSearchByText: PropTypes.func,
    activeSearchBy: PropTypes.string,
    activeSortBy: PropTypes.string,
    history: PropTypes.object,
    location: PropTypes.object
};
