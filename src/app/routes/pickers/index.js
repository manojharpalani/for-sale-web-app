import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import DateTime from './routes/DateTime'
import ColorPicker from './routes/Color'


const Pickers = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/date-time`}/>
            <Route path={`${match.url}/date-time`} component={DateTime}/>
            <Route path={`${match.url}/color`} component={ColorPicker}/>
        </Switch>
    </div>
);

export default Pickers;
