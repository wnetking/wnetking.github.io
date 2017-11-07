import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import Home from 'async!../routes/home';
import Skills from 'async!./skills';
import Experience from 'async!./experience';
import Education from 'async!./education';
import Events from 'async!./events';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Skills path="/skills" />
					<Experience path="/experience" />
					<Education path="/education" />
					<Events path="/events" />
				</Router>
			</div>
		);
	}
}
