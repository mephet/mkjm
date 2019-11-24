import React from 'react';

import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
