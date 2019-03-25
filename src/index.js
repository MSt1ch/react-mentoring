import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary';
import css from './index.module.scss';


const App = () => (
    <>
        <Header />
        <Content />
        <Footer />
    </>
);

ReactDOM.render(
    <ErrorBoundary>
        <App className={css.app}/>
    </ErrorBoundary>,
    document.getElementById('app')
);

module.hot.accept();
