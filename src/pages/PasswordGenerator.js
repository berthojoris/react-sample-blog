import React, { Component } from "react";
import PassGen from "generate-password";
 
class PasswordGenerator extends Component {

	constructor (props) {
		super(props);
		this.state = {
			txtpassword: "",
			defaulLength: 12
		}
		
	}

	generatePassword = () => {
		var password = PassGen.generate({
			length: this.state.defaulLength,
			numbers: true,
			uppercase: true,
			symbols: true,
			strict: true,
			excludeSimilarCharacters: true
		});

		this.setState({
			txtpassword : password
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">Password Generation</h2>
							<div className="row justify-content-center">
								<div className="col-md-10 input-group mb-3">
									<input type="text" name="txtpassword" id="txtpassword" className="form-control" placeholder="Password" defaultValue={this.state.txtpassword} readOnly></input>
									<div className="input-group-append">
										<button className="btn btn-info" type="button" onClick={this.generatePassword}>Generate Password</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default PasswordGenerator;