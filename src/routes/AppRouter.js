import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';
import Sorting from '../pages/Sorting';
import About from '../pages/About';
import Physics from '../pages/Physics';
import Rose from '../pages/Rose';
import Projects from '../pages/Projects';
import Fourier from '../pages/Fourier';

const { Content } = Layout;

const AppRouter = () => {

    return (
        <Content>
            <Route path={process.env.PUBLIC_URL +'/'} exact component={Home} />
            <Route path={process.env.PUBLIC_URL + '/projects/sorting'} exact component={Sorting} />
            <Route path={process.env.PUBLIC_URL + '/about'} exact component={About} />
            <Route path={process.env.PUBLIC_URL + '/projects/physics'} exact component={Physics} />
            <Route path={process.env.PUBLIC_URL + '/projects'} exact component={Projects} />
            <Route path={process.env.PUBLIC_URL + '/projects/rose'} exact component={Rose} />
            <Route path={process.env.PUBLIC_URL + '/projects/fourier'} exact component={Fourier} />
        </Content>
    )
}

export default AppRouter;