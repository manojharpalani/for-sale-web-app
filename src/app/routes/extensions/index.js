import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import DragNDrop from './routes/dragnDrop'

const Extensions = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dnd`}/>
            <Route path={`${match.url}/dnd`} component={DragNDrop}/>
        </Switch>
    </div>
);

export default Extensions;
