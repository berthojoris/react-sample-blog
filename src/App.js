import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./routes/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PasswordGenerator from "./pages/PasswordGenerator";
import PostDetail from "./pages/PostDetail";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<div className="container" id="panel_container">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/post' component={Post} />
							<Route exact path='/password' component={PasswordGenerator} />
							<Route exact path="/post/:id/:slug" component={PostDetail}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;