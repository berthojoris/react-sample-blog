import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostData from "./../data/data.json";
import slugify from "slugify";
class Home extends Component {

	render() {
		return (
			<div className="row">
				{PostData.map((postDetail, index) => {
					const slug = slugify(postDetail.title, '-');
					const openDetailPage = { 
						pathname: "/post/"+postDetail.id+"/"+slug,
						id: postDetail.id
					};
					return <div className="col-md-4 mt-5" key={postDetail.id}>
						<div className="card h-100">
							<div className="card-body">
								<h2 className="card-title">{postDetail.title}</h2>
								<p className="card-text">{postDetail.body}</p>
								<span className="text-center">{postDetail.author}</span>
							</div>
							<div className="card-footer">
								<Link className="btn btn-primary btn-sm" to={openDetailPage}>Detail</Link>
							</div>
						</div>
					</div>
				})}
			</div>
		);
	}
}
 
export default Home;