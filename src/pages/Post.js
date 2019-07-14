import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';
import _ from "lodash";
class Post extends Component {

	constructor (props) {
		super(props);
		this.validator = new SimpleReactValidator();
		this.state = {
			title: "",
			body: "",
			author: "",
			currentPostData: []
		}
	}

	componentDidMount() {
		// let autoIncrement = 0;
		// var _this = this;
		const localDB = localStorage.getItem('post');
		const lastData = _.last(localDB);
		console.log(lastData);
		// if(!_.isEmpty(localDB)) {
		// 	const lastData = _.last(JSON.stringify(localDB));
		// 	autoIncrement = parseInt(lastData.id + 1);
		// } else {
		// 	autoIncrement = 1;
		// }
		// console.log(autoIncrement);
		// _.forEach(PostData, function(value) {
		// 	_this.state.currentPostData.push([1, 2, 3]);
		// 	var dataToAppend = {
		// 		author: "Test author", 
		// 		id: 111, 
		// 		title: "Test Title",
		// 		body: "Test Body"
		// 	};
		// });
		// console.log(this.state.currentPostData);
	}

	submitForm() {
		if ( this.validator.allValid() ) {
			alert('You submitted the form and stuff!');
		} else {
			this.validator.showMessages();
			this.forceUpdate();
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	buildInputForm(name, value, rules, type = 'text', ph) {
		value = value || this.state[name];
		rules = rules || name;
		ph = "Enter "+this.capitalizeFirstLetter(name);
		return (
			<div className="form-group">
				<label className="control-label col-sm-2">{this.capitalizeFirstLetter(name)}</label>
				<div className="col-sm-6">
					<input className="form-control" type={type} name={name} value={this.state[name]} autoComplete="off" placeholder={ph} onChange={this.handleInputChange.bind(this)} onBlur={() => this.validator.showMessageFor(name)} />
					{this.validator.message(name, value, rules)}
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">Create Post</h2>
							<hr/>
							<form className="form-horizontal">
								{this.buildInputForm('title', '', 'required')}
								<div className="form-group">
									<label className="control-label col-sm-2">Body :</label>
									<div className="col-sm-6">
										<textarea className="form-control" name="body" id="body" placeholder="Enter Body" cols="30" rows="5" defaultValue={this.state.body} onChange={this.handleInputChange.bind(this)} onBlur={() => this.validator.showMessageFor('body')}></textarea>
										{this.validator.message('body', this.state.body, 'required')}
									</div>
								</div>
								{this.buildInputForm('author', '', 'required')}
							</form> 
						</div>
						<div className="card-footer">
							<button className="btn btn-success" onClick={this.submitForm.bind(this)}>Submit</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Post;