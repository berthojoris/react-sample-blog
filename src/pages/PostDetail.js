import React, { Component } from "react";
import _ from "lodash";
import PostData from "./../data/data.json";
class PostDetail extends Component {

	constructor (props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			author: ""
		}
	}

	stateDefault() {
		this.setState({ 
			id: null,
			title: null,
			body: null,
			author: null
		});
	}

	stateUpdate(data) {
		this.setState({ 
			id: data.id,
			title: data.title,
			body: data.body,
			author: data.author
		});
	}

	componentDidMount() {
		let payload = parseInt(this.props.match.params.id);
		let findOne = _.find(PostData, {id: payload});

		if(_.isEmpty(findOne)) {
			this.props.history.push('/')
		} else {
			this.stateDefault();
			if(_.isEmpty(findOne)) {
				alert("Data not found")
				this.props.history.push('/')
			} else {
				this.stateUpdate(findOne);
			}
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">{this.state.title}</h2>
							<p className="card-text">{this.state.body}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default PostDetail;