import React from 'react';

import './App.css';
import HeaderComponent from './components/common/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import AppRouter from './routes/AppRouter';
import Sidebar from './components/common/SidebarComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Layout>
        <Sidebar />
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
