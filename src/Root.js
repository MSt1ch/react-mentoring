import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import NotFoundPage from './pages/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import css from './index.module.scss';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const MainPage = () => (
    <div className={ css.app }>
        <Header/>
        <Content/>
        <Footer/>
    </div>
);

const Root = ({ Router, location, context, store }) => (
    <Provider store={ store }>
        <ErrorBoundary>
            <Router location={ location } context={ context }>
                <Switch>
                    <Route exact path={ ["/", "/film/:id", "/search"] } component={ MainPage } />
                    <Route component={ NotFoundPage } />
                </Switch>
            </Router>
        </ErrorBoundary>
    </Provider>
);

Root.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
      url: PropTypes.string
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired
      }).isRequired
  };
  Root.defaultProps = {
    location: null,
    context: null
  };

export default hot(module)(Root);


