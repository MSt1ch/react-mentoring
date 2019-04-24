import React from 'react';
import css from './header.module.scss';
import Button from '../Button';
import FilmDescription from '../FilmDescription';
import FormSearch from '../FormSearch';
import PropTypes from 'prop-types';
import { resetFilmsData, resetSearchText } from '../../actions/actions';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

const headerTitle = 'netflixroulette';

const HeaderLogo = ({ history, resetFilmsData, resetSearchText }) => (
    <h1
        className={ css.h1 }
        onClick={ () => {
            resetFilmsData();
            resetSearchText();
            history.push("/");
        } }
    >
        { headerTitle }
    </h1>
);

const HeaderWrap = withRouter(({ history, resetFilmsData, resetSearchText }) => (
    <div className={ css.headerWrap }>
        <div className={ css.headerTop }>
            <HeaderLogo history={ history } resetFilmsData={ resetFilmsData } resetSearchText={ resetSearchText }/>
        </div>
        <FormSearch/>
    </div>
));

const FilmDescriptionHeader = withRouter(({ history, resetFilmsData, resetSearchText }) => (
    <div className={ css.headerWrap }>
        <div className={ css.headerTop }>
        <HeaderLogo history={ history } resetFilmsData={ resetFilmsData } resetSearchText={ resetSearchText }/>
            <Button
                onClick={ () => {
                    resetFilmsData();
                    resetSearchText();
                    history.push("/");
                } }
                name="search" inverse/>
        </div>
        <FilmDescription/>
    </div>
));

class Header extends React.PureComponent {
    render () {
        return (
            <header className={ css.header }>
                <Switch>
                    <Route exact path="/film/:id" render={ () => <FilmDescriptionHeader { ...this.props } /> }/>
                    <Route exact path={ ["/", "/search"] } render={ () => <HeaderWrap { ...this.props } /> }/>
                </Switch>
            </header>
        );
    }
}

const mapDipatchToProps = {
    resetFilmsData,
    resetSearchText
};

export default withRouter(connect(null, mapDipatchToProps)(Header));

Header.propTypes = {
    match: PropTypes.object,
    path: PropTypes.string,
    history: PropTypes.object,
    resetFilmsData: PropTypes.func,
    resetSearchText: PropTypes.func
};
