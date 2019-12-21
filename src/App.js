import React from 'react';

import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';

class App extends React.Component {

	render() {

		const styles = {
			layoutStyle: {
				height: '100%'
			},
			headerStyle: {
				height: 1
			}
		}

		return (
			<Router>
				<Layout >
					<HeaderComponent />
					<AppRouter />
				</Layout>
			</Router >
		);
	}
}

export default App;
