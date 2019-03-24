import React from 'react';
import css from './header.module.scss';
import Button from '../Button';
import FilmDescription from '../FilmDescription';
import InputSearch from '../InputSearch';

const headerTitle = 'netflixroulette';
const textCategory = 'search by';

class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            data: {},
            isReceive: false
        };
    }

    componentDidMount () {
        fetch('http://react-cdp-api.herokuapp.com/movies/338970')
            .then(res => res.json())
            .then(json =>
                this.setState({
                    data: json,
                    isReceive: !this.state.isReceive
                })
            );
    }
    render () {
        return (
            <header className={css.header}>
                <div className={css.headerWrap}>
                    <div className={css.headerTop}>
                        <h1 className={css.h1}>{ headerTitle }</h1>
                        <Button name="search" inverse/>
                    </div>
                    <div className={css.searchWrap}>
                        <InputSearch />
                        <div className={css.searchButtonsWrap}>
                            <div className={css.category}>
                                <p>{ textCategory }</p>
                                <Button name="title" active/>
                                <Button name="genre" wide/>
                            </div>
                            <Button name="search" extraWide active/>
                        </div>
                    </div>
                </div>
                <FilmDescription {...this.state.data} />
            </header>
        );
    }
}

export default Header;
