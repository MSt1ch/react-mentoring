import React from 'react';
import css from './header.module.scss';
import Button from '../Button';
import FilmDescription from '../FilmDescription';
import FormSearch from '../FormSearch';

const headerTitle = 'netflixroulette';

class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            data: {},
            isReceive: false
        };
    }

    render () {
        return (
            <header className={ css.header }>
                <div className={ css.headerWrap }>
                    <div className={ css.headerTop }>
                        <h1 className={ css.h1 }>{ headerTitle }</h1>
                        <Button name="search" inverse/>
                    </div>
                    <FormSearch />
                </div>
            <FilmDescription/>
            </header>
        );
    }
}

export default Header;
