import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Custom Vision</h1>
                <Link to="login">login</Link>
            </div>

        );
    }
}