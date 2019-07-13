import React, { Component } from "react";
import _ from "lodash";
import PostData from "./../data/data.json";
class PostDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: null,
			title: null,
			body: null,
			author: null
		};
	}

	stateDefault() {
		this.setState({ 
			id: null,
			title: null,
			body: null,
			author: null
		});
	}

	componentDidMount() {
		if(_.isEmpty(this.props.location.title)) {
			this.stateDefault();
			let payload = this.props.match.params.id;
			let findOne = _.find(PostData, {id: payload});
			if(_.isEmpty(findOne)) {
				alert("Data not found")
				this.props.history.push('/')
			} else {
				this.setState({ 
					id: payload,
					title: findOne.title,
					body: findOne.body,
					author: findOne.author
				});
			}
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">{this.props.location.title}</h2>
							<p className="card-text">{this.props.location.body}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default PostDetail;