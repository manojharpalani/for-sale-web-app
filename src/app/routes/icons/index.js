import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Material from './routes/Material/index'


const Icons = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/material`}/>
            <Route path={`${match.url}/material`} component={Material}/>
        </Switch>
    </div>
);

export default Icons;
