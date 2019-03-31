import css from './footer.module.scss';
import React from 'react';

const title = 'netflixroulette';

const Footer = () => {
    return (
        <footer className={ css.footerStyle }>
            <h4 className={ css.footerP }>{ title }</h4>
        </footer>
    );
};

export default Footer;
