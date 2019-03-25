import React from 'react';
import ErrorImage from './error.png';
import css from './errorBoundary.module.scss';

class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
    }

    render () {
        if (this.state.hasError) {
            return (
                <div className={ css.errorWrap }>
                    <img src={ ErrorImage } alt="error"/>
                    <h1 className={ css.errorH1 }>Oops, something wrong here...</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
