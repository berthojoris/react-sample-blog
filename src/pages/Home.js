import React, { Component } from "react";
import PostData from "./../data/data.json";
import slugify from "slugify";
import Dexie from "dexie";
import Blog from "./../components/Blog";
import _ from "lodash";

class Home extends Component {

	constructor (props) {
		super(props);
		this.state = {
			blogdata: [],
			isLoaded: true,
			totalData: 0
		}
	}

	componentDidMount() {
		var db = new Dexie("BlogDatabase");
		db.version(1).stores({blogs: "++id,title,body,author,slugtitle"});

		db.blogs.toCollection().count((totaldata) => {

			if(parseInt(totaldata) === 0) {
				_.forEach(PostData, function(value) {
					db.blogs.add({
						title: value.title,
						body: value.body,
						author: value.author,
						slugtitle: slugify(value.title, '-')
					});
				});

				db.blogs.toArray((result) => {
					this.setState({
						isLoaded: false,
						totalData: this.state.totalData,
						blogdata: result
					});
				});
			} else {
				this.setState({
					totalData: totaldata
				});

				if(parseInt(this.state.totalData) > 0) {
					db.blogs.toArray((result) => {
						this.setState({
							isLoaded: false,
							totalData: this.state.totalData,
							blogdata: result
						});
					});
				} else {
					this.setState({
						isLoaded: false,
						totalData: this.state.totalData,
						blogdata: PostData
					});
				}
			}
		});
	}

	render() {
		return (
			<div className="row">
				{this.state.blogdata.map((postDetail) => {
					
					const slug = slugify(postDetail.title, '-');
					const openDetailPage = { 
						pathname: "/post/"+postDetail.id+"/"+slug,
						id: postDetail.id
					};

					return <Blog key={postDetail.id} id={postDetail.id} title={postDetail.title} body={postDetail.body} author={postDetail.author} detailpage={openDetailPage} />
				})}
				
			</div>
		);
	}
}
 
export default Home;