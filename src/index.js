import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary';
import css from './index.module.scss';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();

const App = () => (
    <>
        <Header />
        <Content />
        <Footer />
    </>
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
