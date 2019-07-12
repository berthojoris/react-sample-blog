import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./routes/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PasswordGenerator from "./pages/PasswordGenerator";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<div class="container" id="panel_container">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/post' component={Post} />
							<Route path='/password' component={PasswordGenerator} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;