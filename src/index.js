import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import appStyle from "./appStyle";

const greeting = "Welcome aboard,";
const name = "Stanislau Matsiyeuski";

const App = ({ name }) => (
    <div className="page-wrapper">
        { Header }
        <h2 style={ appStyle }>{ name }</h2>
        <Content/>
        <Footer />
    </div>
);

ReactDOM.render(
    <App name={`${ greeting } ${ name }.`}/>,
    document.getElementById("app")
);

module.hot.accept();