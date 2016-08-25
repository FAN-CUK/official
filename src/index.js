// React
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import { App, Introduce, Board, Login, Register } from 'containers';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension && window.devToolsExtension()
	)
);

// Get 'root' id element by public/index.html
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Introduce}/>
				<Route path="/board" component={Board}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register} />
			</Route>
		</Router>
	</Provider>

	, rootElement
);
