import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
 
class PasswordGenerator extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-5">
					<div className="card h-100">
						<div className="card-body">
							<h2 className="card-title">Password Generation</h2>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default PasswordGenerator;