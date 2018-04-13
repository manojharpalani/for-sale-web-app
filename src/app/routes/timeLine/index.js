import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Default from './routes/default';
import DefaultWithIcon from './routes/defaultWithIcon';
import LeftAligned from './routes/leftAligned';
import Zigzag from './routes/zigzag';


const TimeLine = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
            <Route path={`${match.url}/default`} component={Default}/>
            <Route path={`${match.url}/default-with-icon`} component={DefaultWithIcon}/>
            <Route path={`${match.url}/left-align`} component={LeftAligned}/>
            <Route path={`${match.url}/zigzag`} component={Zigzag}/>
        </Switch>
    </div>
);

export default TimeLine;
