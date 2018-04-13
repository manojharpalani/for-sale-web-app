import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import BasicTables from './routes/basic/index'
import DataTables from './routes/data/index'


const Table = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
            <Route path={`${match.url}/basic`} component={BasicTables}/>
            <Route path={`${match.url}/data`} component={DataTables}/>
        </Switch>
    </div>
);

export default Table;
