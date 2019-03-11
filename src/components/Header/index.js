import headerStyle from "./headerStyle";
import React from "react";

const title = "Hello World!";

const Header = React.createElement(
    "div",
    { className: "header", style: headerStyle },
    title
);

export default Header;