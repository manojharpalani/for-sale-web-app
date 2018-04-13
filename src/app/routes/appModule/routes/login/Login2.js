import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import {FormControlLabel} from 'material-ui/Form';

const Login2 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content">
                <div className="login-header mb-4">
                    <a className="app-logo" href="#/" title="Jambo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/2000px-Amazon_logo_plain.svg.png" alt="jambo" title="jambo"/>
                    </a>
                </div>

                <div className="login-form">
                    <form>
                        <fieldset>
                            <TextField
                                id="required"
                                label="Email"
                                fullWidth
                                defaultValue=""
                                margin="normal"
                                className="mt-1"
                            />
                            <TextField
                                type="password"
                                id="required"
                                label="Password"
                                fullWidth
                                defaultValue=""
                                margin="normal"
                                className="mt-1"
                            />
                            <div className="mt-1 mb-2 d-flex justify-content-between align-items-center">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="gilad"
                                        />
                                    }
                                    label="Remember me"
                                />

                                <div>
                                    <a className="text-primary" href="#/app/app-module/forgot-password-2"
                                       title="Reset Password">Forgot
                                        your password</a>
                                </div>
                            </div>

                            <Button href="#/app/ecommerce/products-grid" raised className="jr-btn text-white btn-primary">Sign
                                In</Button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login2;
