import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import {FormControlLabel} from 'material-ui/Form';


class LoginWithStepper extends React.Component {
    state = {
        activeStep: 0,
        email: '',
        password: ''
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
            email: '',
            password: ''
        });
    };

    getPassword() {
        return <TextField
            type="password"
            id="password"
            label="Password"
            fullWidth
            defaultValue={this.state.password}
            onChange={(event) => this.setState({password: event.target.value})}
            margin="normal"
            className="mt-1"
        />
    }

    getEmail() {
        return <div>
            <TextField
                id="email"
                label="Email"
                fullWidth
                onChange={(event) => this.setState({email: event.target.value})}
                defaultValue={this.state.email}
                margin="normal"
                className="mt-1"
            />
        </div>
    }

    handleNext = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.getEmail();
            case 1:
                return this.getPassword();
            default:
                return 'Login Successfully';
        }
    }

    render() {
        const steps = 2;
        const {activeStep} = this.state;
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
                        {this.state.activeStep === steps ?
                            <div>
                                <div className="my-2">
                                    All steps completed
                                </div>
                                <Button onClick={this.handleReset}>Reset</Button>
                            </div>
                            :
                            <form>
                                <fieldset>
                                    {this.getStepContent(activeStep)}
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

                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className="mr-2"
                                    >
                                        Back
                                    </Button>
                                    <Button raised className="jr-btn text-white btn-primary"
                                            onClick={this.handleNext}>
                                        {activeStep === steps - 1 ? 'Sign In' : 'Next'}
                                    </Button>

                                </fieldset>
                            </form>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginWithStepper;
