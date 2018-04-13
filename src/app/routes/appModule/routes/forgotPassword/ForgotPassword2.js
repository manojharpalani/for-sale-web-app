import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const ForgotPassword2 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content">
                <div className="login-header">
                    <a className="app-logo" href="#/" title="Jambo">
                        <img src="http://via.placeholder.com/220x80" alt="jambo" title="jambo"/>
                    </a>
                </div>

                <div className="mb-2">
                    <h2>Forgot your password?</h2>
                </div>

                <div className="login-form">
                    <form method="post" action="#/">
                        <TextField
                            type="email"
                            id="required"
                            label="Email"
                            fullWidth
                            defaultValue=""
                            margin="normal"
                            className="mt-0 mb-4"
                        />

                        <p className="mb-3">
                            Don't remember your email? &nbsp;
                            <a className="small text-primary" href="javascript:void(0)">Contact Support</a>.
                        </p>

                        <Button href="javascript:void(0)" raised className="jr-btn text-white btn-primary">
                            Reset Password
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword2;

