import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello World!';
const greeting = "Welcome aboard,";
const name = "Stanislau Matsiyeuski";

const data = [
    { id: 1, type: "Core concepts lecture" },
    { id: 2, type:"Webpack lecture" },
    { id: 3, type: "Components lecture" },
    { id: 4, type: "Testing lecture" },
    { id: 5, type: "Flux + Redux" },
    { id: 6, type: "Routing" },
    { id: 7, type: "Server Side Rendering" },
    { id: 8, type: "Useful libraries" },
];

const footerStyle = {
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
    height: "60px",
    backgroundColor: "#ccc",
    textAlign: "center",
    color: "#3f51b5",
    fontFamily: "sans-serif",
    fontSize: "18px"
};

const headerStyle = {
    width: "100%",
    height: "60px",
    backgroundColor: "#673AB7",
    textAlign: "center",
    color: "#009688",
    fontFamily: "sans-serif",
    fontSize: "36px",
    lineHeight: "60px"
};
const greetingStyle = {
    textAlign: "center",
    fontFamily: "sans-serif",
};

const listStyle = {
    paddingLeft: "150px",
    fontFamily: "sans-serif",
    color: "#3F51B5",
    fontSize: "18px"
};

//1-3 render blank message (Hello world) with react
//1-4 use at least 2 metods of creating react components
//1-5 use all methods which mentioned in task, to create react components
const Header = React.createElement(
    "div",
    { className: "header", style: headerStyle },
    title
);

class List extends React.PureComponent {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }
    render() {
        console.log(this.state.data);
        return (
            <div style={ listStyle }>
                <p>List of tasks:</p>
                <ul style={ { listStyleType: "none" } }>
                    { this.state.data.map(({ type, id }) => (
                        <li
                            key={ id }
                            style={id === 1 ? { textDecoration: "line-through" } : null}>
                            Task { id }. { type }
                        </li>)
                    ) }
                </ul>
            </div>
        );
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer style={ footerStyle }>
                <p>{ name }</p>
            </footer>
        )
    }
}

const App = ({ name }) => (
    <div className="page-wrapper">
        { Header }
        <h2 style={ greetingStyle }>{ name }</h2>
        <List/>
        <Footer />
    </div>
);

ReactDOM.render(
    <App name={`${ greeting } ${ name }.`}/>,
    document.getElementById('app')
);

module.hot.accept();