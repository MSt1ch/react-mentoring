import css from './content.module.scss';
import React from 'react';
import StackGrid from "react-stack-grid";
import FilmItem from '../FilmItem';
import FilterSection from '../FilterSection';

class Content extends React.PureComponent {
    constructor () {
        super();
        this.state = {
            data: [],
            error: false
        };
    }

    componentDidMount () {
        fetch('http://react-cdp-api.herokuapp.com/movies?limit=9')
            .then(res => res.json())
            .then(json =>
                this.setState({
                    data: json.data
                })
            ).catch((error) => this.setState({ error: !this.state.error }));
    }

    render () {
        return (
            <main>
                { this.state.data.length && <FilterSection {...this.state} />}
                <div className={css.contentStyle}>
                    {this.state.error && <p className={css.contentP}>No films found</p>}
                    <StackGrid
                        columnWidth={300}
                        gutterWidth={48}
                        gutterHeight={48}
                        itemComponent="div"
                    >
                        { this.state.data && this.state.data.
                            map(
                                film => <FilmItem key={film.id} {...film} />
                            )
                        }
                    </StackGrid>
                </div>
            </main>

        );
    }
}

export default Content;
