import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import css from './index.module.scss';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const store = configureStore();

const MainPage = () => (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
);

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ ["/", "/film/:id", "/search"] } component={ MainPage } />
            <Route component={ PageNotFound } />
        </Switch>
    </Router>
);

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundary>
                <App className={ css.app }/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();

registerServiceWorker();
