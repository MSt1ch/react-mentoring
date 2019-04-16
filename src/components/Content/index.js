import css from './content.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";
import FilmItem from '../FilmItem';
import FilterSection from '../FilterSection';
import PropTypes from 'prop-types';
import { fetchFilmDescription, fetchFilmsData } from '../../actions';

class Content extends React.Component {
    componentDidMount () {
        this.props.fetchFilmsData(null, this.props.activeSearchBy, this.props.activeSortBy);
    }

    render () {
        const { data, fetchFilmDescription } = this.props;
         return (
            <main>
                <FilterSection { ...this.props } />
                <div className={ css.contentStyle }>
                    {!data || data.length === 0 && <p className={ css.contentP }>No films found</p>}
                    <StackGrid
                        columnWidth={ 300 }
                        gutterWidth={ 48 }
                        gutterHeight={ 48 }
                        itemComponent="div"
                        monitorImagesLoaded
                    >
                        { data && data.
                            map(
                                film => <FilmItem key={ film.id } { ...film } fetchFilmDescription={ fetchFilmDescription } />
                            )
                        }
                    </StackGrid>
                </div>
            </main>

        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.content.filmsData.data,
        total: state.content.filmsData.total,
        activeSearchBy: state.search.activeSearchBy,
        activeSortBy: state.sort.activeSortBy
    };
};

const mapDispatchToProps = {
    fetchFilmDescription,
    fetchFilmsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

Content.propTypes = {
    total: PropTypes.number,
    data: PropTypes.array,
    activeSearchBy: PropTypes.string,
    activeSortBy: PropTypes.string,
    fetchFilmDescription: PropTypes.func,
    fetchFilmsData: PropTypes.func
};
