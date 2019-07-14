import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Blog extends Component {
    render() {
        const {id, title, body, author, detailpage} = this.props;
        return (
            <div className="col-md-4 mt-5" key={id}>
                <div className="card h-100">
                    <div className="card-body"><h2 className="card-title">{title}</h2>
                    <p className="card-text">{body}</p>
                    <span className="text-center">{author}</span>
                    </div>
                    <div className="card-footer">
                        <Link className="btn btn-primary btn-sm" to={detailpage}>Detail</Link>
                    </div>
                </div>
            </div>
        )
    }
}
