import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Login1 from './routes/login/Login1'
import SignUP1 from './routes/signUp/SignUP1'
import ForgotPassword1 from './routes/forgotPassword/ForgotPassword1'
import LockScreen1 from './routes/lockScreen/LockScreen1'
import Login2 from './routes/login/Login2'
import SignUp2 from './routes/signUp/SignUP2'
import ForgotPassword2 from './routes/forgotPassword/ForgotPassword2'
import LockScreen2 from './routes/lockScreen/LockScreen2'
import LoginWithStepper from './routes/login/LoginWithStepper'


const AppModule = ({match}) => (
    <div className="app-wrapper h-100">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/login-1`}/>
            <Route path={`${match.url}/login-1`} component={Login1}/>
            <Route path={`${match.url}/login-2`} component={Login2}/>
            <Route path={`${match.url}/login-with-stepper`} component={LoginWithStepper}/>
            <Route path={`${match.url}/sign-up-1`} component={SignUP1}/>
            <Route path={`${match.url}/sign-up-2`} component={SignUp2}/>
            <Route path={`${match.url}/forgot-password-1`} component={ForgotPassword1}/>
            <Route path={`${match.url}/forgot-password-2`} component={ForgotPassword2}/>
            <Route path={`${match.url}/lock-screen-1`} component={LockScreen1}/>
            <Route path={`${match.url}/lock-screen-2`} component={LockScreen2}/>
        </Switch>
    </div>
);

export default AppModule;
