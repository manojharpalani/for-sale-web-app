import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Basic from './routes/basic/'
import Cultures from './routes/cultures/'
import Dnd from './routes/dnd/'
import Popup from './routes/popup/'
import Rendering from './routes/rendering/'
import Selectable from './routes/selectable/'
import Timeslots from './routes/timeslots/'

const Calendar = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
            <Route path={`${match.url}/basic`} component={Basic}/>
            <Route path={`${match.url}/cultures`} component={Cultures}/>
            <Route path={`${match.url}/dnd`} component={Dnd}/>
            <Route path={`${match.url}/popup`} component={Popup}/>
            <Route path={`${match.url}/rendering`} component={Rendering}/>
            <Route path={`${match.url}/selectable`} component={Selectable}/>
            <Route path={`${match.url}/timeslots`} component={Timeslots}/>
        </Switch>
    </div>
);

export default Calendar;
