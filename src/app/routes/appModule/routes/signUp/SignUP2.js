import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const SignUP2 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <a className="app-logo" href="#/" title="Jambo">
                        <img src="http://via.placeholder.com/220x80" alt="jambo" title="jambo" />
                    </a>
                </div>

                <div className="mb-4">
                    <h2>Create an account</h2>
                </div>

                <div className="login-form">
                    <form method="post" action="#/">
                        <TextField
                            type="text"
                            id="required"
                            label="Name"
                            fullWidth
                            defaultValue=""
                            margin="normal"
                            className="mt-0 mb-2"
                        />

                        <TextField
                            type="email"
                            id="required"
                            label="Email"
                            fullWidth
                            defaultValue=""
                            margin="normal"
                            className="mt-0 mb-2"
                        />

                        <TextField
                            type="password"
                            id="required"
                            label="Password"
                            fullWidth
                            defaultValue=""
                            margin="normal"
                            className="mt-0 mb-4"
                        />

                        <div className="mb-3">
                            <Button raised href="javascript:void(0)"
                                    className="jr-btn text-white btn-primary">Regsiter</Button>
                        </div>
                        <p>Have an account <a className="text-primary" href="#/app/app-module/login-2">Sign in</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUP2;
