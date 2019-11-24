import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';
import Sorting from '../pages/Sorting';
import About from '../pages/About';
import Physics from '../pages/Physics';

const { Content } = Layout;

const AppRouter = () => {
    return (
        <Content>
            <Route path='/' exact component={Home} />
            <Route path='/sorting' component={Sorting} />
            <Route path='/about' component={About} />
            <Route path='/physics' component={Physics} />
        </Content>
    )
}

export default AppRouter;