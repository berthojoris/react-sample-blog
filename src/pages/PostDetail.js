import React, { Component } from "react";
import _ from "lodash";
import Dexie from "dexie";
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

	stateUpdate(data) {
		this.setState({ 
			id: data.id,
			title: data.title,
			body: data.body,
			author: data.author
		});
	}

	componentDidMount() {
		const payload = parseInt(this.props.match.params.id);
		
		var db = new Dexie("BlogDatabase");
		db.version(1).stores({
			blogs: "++id,title,body,author,slugtitle"
		});

		db.blogs.where('id').equals(payload).first((result) => {
			if(_.isEmpty(result)) {
				const findOneFromJson = _.find(PostData, {id: payload});
				if(_.isEmpty(findOneFromJson)) {
					alert("Data Not Found");
					this.props.history.push('/')
				} else {
					this.setState({ 
						id: payload,
						title: findOneFromJson.title,
						body: findOneFromJson.body,
						author: findOneFromJson.author
					});
				}
			} else {
				this.setState({
					id: result.id,
					title: result.title,
					body: result.body,
					author: result.author
				})
			}
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">{this.state.title}</h2>
							<p className="card-text">{this.state.body}</p>
							<p className="card-author">Author {this.state.author}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default PostDetail;