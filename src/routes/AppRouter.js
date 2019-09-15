import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';
import Sorting from '../pages/Sorting';

const { Content } = Layout;

const AppRouter = () => {
    return (
        <Content>
            <Route path='/' exact component={Home} />
            <Route path='/sorting' component={Sorting} />
        </Content>
    )
}

export default AppRouter;