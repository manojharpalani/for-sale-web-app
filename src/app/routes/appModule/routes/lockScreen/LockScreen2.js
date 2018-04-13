import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const LockScreen2 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <a className="app-logo" href="#/app/app-module/login-1" title="Jambo">
                        <img src="http://via.placeholder.com/220x80" alt="jambo" title="jambo"/>
                    </a>
                </div>

                <div className="login-avatar mb-4">
                    <img className="rounded-circle size-120" src="http://via.placeholder.com/256x256" alt="" title=""/>
                </div>
                <div className="mb-4">
                    <h3>John Smith</h3>
                    <p>Enter your password to unlock the screen!</p>
                </div>
                <form method="get" action="#/app/app-module/login-1">
                    <TextField
                        type="password"
                        id="required"
                        label="Password"
                        fullWidth
                        defaultValue=""
                        margin="normal"
                        className="mt-0 mb-4"
                    />

                    <div className="mb-2">
                        <Button href="javascript:void(0)" raised className="jr-btn text-white btn-primary">
                            Unlock</Button>
                    </div>
                </form>
                <div>
                    <a className="text-primary right-arrow" href="#/app/app-module/login-1">Sign in using different
                        account</a>
                </div>
            </div>
        </div>
    );
};
export default LockScreen2;
