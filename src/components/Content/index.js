import css from './content.module.scss';
import React from 'react';

class Content extends React.PureComponent {
    constructor () {
        super();
        this.state = { data: [] };
    }

    componentDidMount () {
        fetch('/data')
            .then(res => res.json())
            .then(json =>
                this.setState({
                    data: json.data
                })
            );
    }
    render () {
        return (
            <div className={css.contentStyle}>
                <p>List of tasks:</p>
                <ul style={{ listStyleType: 'none' }}>
                    {this.state.data.map(({ type, id }) => (
                        <li
                            key={id}
                            style={
                                id === 1 ?
                                    { textDecoration: 'line-through' } :
                                    null
                            }
                        >
							Task {id}. {type}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Content;
