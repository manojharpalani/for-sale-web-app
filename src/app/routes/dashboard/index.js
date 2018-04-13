import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Default from './routes/Default'
import ECommerce from './routes/ECommerce'
import News from './routes/News'
import Intranet from './routes/Intranet'

const Dashboard = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
            <Route path={`${match.url}/default`} component={Default}/>
            <Route path={`${match.url}/eCommerce`} component={ECommerce}/>
            <Route path={`${match.url}/news`} component={News}/>
            <Route path={`${match.url}/intranet`} component={Intranet}/>
        </Switch>
    </div>
);

export default Dashboard;