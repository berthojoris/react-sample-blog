import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ButtonLink extends Component {
    render() {
        const {linkTo, text, typeSize} = this.props;
        return (
            <Link className={typeSize} to={linkTo}>{text}</Link>
        )
    }
}