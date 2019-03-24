import React from 'react';
import css from './filterSection.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button';

const FilterSection = ({ data }) => {
    return (
        <div className={css.resultSectionWrap}>
            <div className={css.resultSection}>
                <span>{data.length} movies found</span>
                <div className={css.resultSortBy}>
                    <span>Sort by:</span>
                    <Button name="release date" transparent />
                    <Button name="rating" transparentActive />
                </div>
            </div>
        </div>
    );
};

export default FilterSection;

FilterSection.propTypes = {
    data: PropTypes.array
};
