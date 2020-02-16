import React from 'react';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';

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