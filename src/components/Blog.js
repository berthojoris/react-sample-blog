import React, { Component } from 'react'
import ButtonLink from "./../components/ButtonLink";

export default class Blog extends Component {
    render() {
        const {id, title, body, author, detailpage} = this.props;
        return (
            <div className="col-md-4 mt-5" key={id}>
                <div className="card h-100">
                    <div className="card-body"><h2 className="card-title">{title}</h2>
                    <p className="card-text">{body}</p>
                    <p className="card-author">Author: {author}</p>
                    </div>
                    <div className="card-footer">
                        <ButtonLink linkTo={detailpage} text="Detail" typeSize="btn btn-success"/>
                    </div>
                </div>
            </div>
        )
    }
}