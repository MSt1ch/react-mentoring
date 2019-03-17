import css from './footer.module.scss';
import React from 'react';

const name = 'Stanislau Matsiyeuski';

class Footer extends React.Component {
    render () {
        return (
            <footer className={css.footerStyle}>
                <p>{name}</p>A
            </footer>
        );
    }
}

export default Footer;
