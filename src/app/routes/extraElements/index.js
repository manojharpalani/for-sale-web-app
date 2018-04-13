import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Testimonials from './routes/testimonials/'
import PricingTable from './routes/pricingTable/'
import Callouts from './routes/callouts/'


const ExtraElements = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/pricing-table`}/>
            <Route path={`${match.url}/pricing-table`} component={PricingTable}/>
            <Route path={`${match.url}/callouts`} component={Callouts}/>
            <Route path={`${match.url}/testimonials`} component={Testimonials}/>
        </Switch>
    </div>
);

export default ExtraElements;
