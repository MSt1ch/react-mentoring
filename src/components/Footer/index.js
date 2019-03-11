import footerStyle from "./footerStyle";
import React from "react";

const name = "Stanislau Matsiyeuski";

class Footer extends React.Component {
    render() {
        return (
            <footer style={ footerStyle }>
                <p>{ name }</p>
            </footer>
        )
    }
}

export default Footer;