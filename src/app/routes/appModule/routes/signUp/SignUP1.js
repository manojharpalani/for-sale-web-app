import React from 'react';

const SignUP1 = () => {
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
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control form-control-lg" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email" className="form-control form-control-lg" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control form-control-lg" />
                        </div>
                        <div className="mt-4 mb-2">
                            <a href="#/" className="btn btn-primary jr-btn-rounded">Regsiter</a>
                        </div>
                        <p>Have an account <a className="text-primary" href="#/app/app-module/login-1">Sign in</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUP1;
