import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Components from './routes/components'
import Stepper from './routes/stepper'


const Form = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/components`}/>
            <Route path={`${match.url}/components`} component={Components}/>
            <Route path={`${match.url}/stepper`} component={Stepper}/>
        </Switch>
    </div>
);

export default Form;
