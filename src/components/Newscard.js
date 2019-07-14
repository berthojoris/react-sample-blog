import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Newscard extends Component {
    render() {
        const {id, title, body, author, detailpage} = this.props;
        return (
            <div className="cardContainer inactive mt-5" key={id}>
                <div className="card">
                    <div className="side front">
                        <div className="img img1"></div>
                        <div className="info">
                            <h2>{title}</h2>
                            <p>{body}.</p>
                            <p>{author}</p>
                            <Link className="btn btn-primary btn-sm" to={detailpage}>Detail</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
