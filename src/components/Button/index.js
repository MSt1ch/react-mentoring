import React from 'react';
import css from './button.module.scss';
import PropTypes from 'prop-types';

const buttonStyles = {
    default: css.button,
    wide: css.wide,
    active: css.active,
    extraWide: css.extraWide,
    inverse: css.inverse,
    transparent: css.transparent,
    transparentActive: css.transparentActive
};
const Button = ({
    name,
    wide,
    extraWide,
    active,
    inverse,
    transparent,
    transparentActive
}) => {
    const classList = `${active ? buttonStyles.active : ''} ${wide ? buttonStyles.wide : ''} ${extraWide ? buttonStyles.extraWide : ''} ${inverse ? buttonStyles.inverse : ''} ${transparent ? buttonStyles.transparent : ''} ${transparentActive ? buttonStyles.transparentActive : ''} ${buttonStyles.default}`;
    return (
        <button className={ classList }>
            {name}
        </button>
    );
};

export default Button;

Button.propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    extraWide: PropTypes.bool,
    active: PropTypes.bool,
    inverse: PropTypes.bool,
    transparent: PropTypes.bool,
    transparentActive: PropTypes.bool
};
