import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';

console.log(`App is running in ${process.env.NODE_ENV} mode`);
console.log(process.env.REACT_APP_API_ENDPOINT)

class App extends React.Component {
    render() {
        return (
            <Router >
                <Layout >
                    <HeaderComponent />
                    <AppRouter />
                </Layout>
            </Router >
        );
    }
}

export default App;