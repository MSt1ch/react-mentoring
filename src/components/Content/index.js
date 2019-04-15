import css from './content.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";
import FilmItem from '../FilmItem';
import FilterSection from '../FilterSection';
import PropTypes from 'prop-types';
import { fetchFilmDescription } from '../../actions';

class Content extends React.Component {
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
        total: state.content.filmsData.total

    };
};

const mapDispatchToProps = {
    fetchFilmDescription
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

Content.propTypes = {
    total: PropTypes.number,
    data: PropTypes.array,
    fetchFilmDescription: PropTypes.func
};
