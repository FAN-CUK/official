// React
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import { App, Introduce, Board, Login, Register } from 'containers';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Introduce}/>
			<Route path="/board" component={Board}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register} />
		</Route>
	</Router>

	, rootElement
);
