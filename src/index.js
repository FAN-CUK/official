// React
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import { App, Introduce, Board } from 'containers';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Introduce}/>
			<Route path="/board" component={Board}/>
		</Route>
	</Router>

	, rootElement
);
