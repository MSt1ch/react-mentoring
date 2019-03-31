import React from 'react';
import css from './formSearch.module.scss';
import InputSearch from '../InputSearch';
import Button from '../Button';

const textCategory = 'search by';

const FormSearch = () => {
    return (
    <div className={ css.searchWrap }>
        <InputSearch />
        <div className={ css.searchButtonsWrap }>
            <div className={ css.category }>
                <span>{ textCategory }</span>
                <Button name="title" active/>
                <Button name="genre" wide/>
            </div>
            <Button name="search" extraWide active type="submit"/>
        </div>
    </div>
    );
};

export default FormSearch;
