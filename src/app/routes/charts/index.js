import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import AreaChart from './routes/area'
import BarChart from './routes/bar'
import ComposedChart from './routes/composed'
import LineChart from './routes/line'
import PieChart from './routes/pie'
import Radar from './routes/radar'
import Radial from './routes/radial'
import Scatter from './routes/scatter'
import Treemap from './routes/treemap'


const Chart = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/area`}/>
            <Route path={`${match.url}/area`} component={AreaChart}/>
            <Route path={`${match.url}/bar`} component={BarChart}/>
            <Route path={`${match.url}/composed`} component={ComposedChart}/>
            <Route path={`${match.url}/line`} component={LineChart}/>
            <Route path={`${match.url}/pie`} component={PieChart}/>
            <Route path={`${match.url}/radar`} component={Radar}/>
            <Route path={`${match.url}/radial`} component={Radial}/>
            <Route path={`${match.url}/scatter`} component={Scatter}/>
            <Route path={`${match.url}/treemap`} component={Treemap}/>
        </Switch>
    </div>
);

export default Chart;
