import React from "react";
import css from './inputSearch.module.scss';

const InputSearch = () => {
    return (
		<>
			<label htmlFor="search" className={ css.searchLable }>
			    <span >find your movie</span>
			</label>
            <input id="search" className={ css.searchInput } placeholder="write your film" type="text"/>
		</>
    );
};

export default InputSearch;
