import React from 'react';
import css from './header.module.scss';

const title = 'Hello World!';

class Header extends React.Component {
    render () {
        return <div className={css.header}>{title}</div>;
    }
}

export default Header;
