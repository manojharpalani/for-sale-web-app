import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import SimpleList from './routes/sample'
import StripList from './routes/strip'
import CardList from './routes/card'

const CustomViews = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/simple-list`}/>
            <Route path={`${match.url}/simple-list`} component={SimpleList}/>
            <Route path={`${match.url}/strip-list`} component={StripList}/>
            <Route path={`${match.url}/card-list`} component={CardList}/>
        </Switch>
    </div>
);

export default CustomViews;
