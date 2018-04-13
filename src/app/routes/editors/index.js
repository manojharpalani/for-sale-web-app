import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import CK from './routes/CK'
import WYSISWYG from './routes/WYSISWYG'


const Editors = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/ck`}/>
            <Route path={`${match.url}/ck`} component={CK}/>
            <Route path={`${match.url}/wysiswyg`} component={WYSISWYG}/>
        </Switch>
    </div>
);

export default Editors;
