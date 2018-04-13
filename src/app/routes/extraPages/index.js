import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import AboutUs from './routes/aboutUs/index'
import ContactUs from './routes/contactUs/index'
import Blog from './routes/blog/index'
import FAQ from './routes/faq/index'
import Portfolio from './routes/portfolio/index'
import Error404 from './routes/404/index'
import Error500 from './routes/500/index'


const Pages = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/about-us`}/>
            <Route path={`${match.url}/about-us`} component={AboutUs}/>
            <Route path={`${match.url}/contact-us`} component={ContactUs}/>
            <Route path={`${match.url}/blog`} component={Blog}/>
            <Route path={`${match.url}/faq`} component={FAQ}/>
            <Route path={`${match.url}/portfolio`} component={Portfolio}/>
            <Route path={`${match.url}/error-404`} component={Error404}/>
            <Route path={`${match.url}/error-500`} component={Error500}/>
        </Switch>
    </div>
);

export default Pages;
