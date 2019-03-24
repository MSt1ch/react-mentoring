import css from './footer.module.scss';
import React from 'react';

const title = 'netflixroulette';

const Footer = () => {
    return (
        <footer className={css.footerStyle}>
            <p className={css.footerP}>{ title }</p>
        </footer>
    );
};

export default Footer;
