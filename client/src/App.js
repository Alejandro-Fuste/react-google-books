import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Navigation from './components/Navigation';
import Jumbo from './components/Jumbo';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Jumbo />
					<Route exact path="/" component={Search} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/saved" component={Saved} />
				</div>
			</Router>
		);
	}
}

export default App;
