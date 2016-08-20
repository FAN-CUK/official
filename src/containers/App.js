import React from 'react';
import { Header, Footer } from 'components';

class App extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="container">
					{ this.props.children }
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
