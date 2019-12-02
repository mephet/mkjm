import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';
import { resizeWindow } from './actions/windowAction';

class App extends React.Component {

	updateDimensions = () => {
		const { resizeWindow } = this.props;
		// console.table(window.innerWidth, window.innerHeight)
		resizeWindow({ width: window.innerWidth, height: window.innerHeight})
	};
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	render() {
		
		return (
			<Router>
				{/* <h1>{`Viewport dimensions: Width - ${this.props.viewportWidth} : Height - ${this.props.viewportHeight}`}</h1> */}
				<HeaderComponent />
				<Layout>
					<AppRouter />
				</Layout>
			</Router >
		);
	}
}

const mapStateToProps = state => {
	return {
		viewportWidth: state.windowDetails.viewportWidth,
		viewportHeight: state.windowDetails.viewportHeight
	}
}

const mapDispatchToProps = dispatch => {
	return {
		resizeWindow: (windowDimensions) => dispatch(resizeWindow(windowDimensions))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
