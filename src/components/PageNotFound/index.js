import React from 'react';
import css from './pageNotFound.module.scss';
import image from './page-not-found.png';

export default class PageNotFound extends React.Component {
    render () {
        return (
            <div className={ css.imageWrap }>
                <img src={ image }/>
            </div>
        );
    }
}
