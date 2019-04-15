import React from "react";
import css from './inputSearch.module.scss';
import PropTypes from 'prop-types';

class InputSearch extends React.Component {
	constructor (props) {
		super(props);

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange (event) {
		this.props.setSearchText(event.target.value);
	}

	render () {
		const { value } = this.props;
		return (
			<>
				<label htmlFor = "search" className = { css.searchLable }>
					<span> find your movie </span>
				</label>
				<input
					id = "search"
					className = { css.searchInput }
					placeholder = "write your film"
					type = "text"
					value = { value }
					onChange = { this.onSearchChange }
				/>
			</>
		);
	}
}


export default InputSearch;

InputSearch.propTypes = {
	value: PropTypes.string,
	setSearchText: PropTypes.func
};
