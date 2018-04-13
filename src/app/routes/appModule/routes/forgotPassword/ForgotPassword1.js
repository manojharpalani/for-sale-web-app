import React from 'react';

const ForgotPassword1 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content">
                <div className="login-header">
                    <a className="app-logo" href="#/" title="Jambo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/2000px-Amazon_logo_plain.svg.png" alt="jambo" title="jambo" />
                    </a>
                </div>

                <div className="mb-4">
                    <h2>Forgot your password?</h2>
                </div>

                <div className="login-form">
                    <form method="post" action="#/">
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Your Email" className="form-control form-control-lg" />
                        </div>

                        <p>
                            Don't remember your email? &nbsp;
                            <a className="small text-primary" href="javascript:void(0)">Contact Support</a>.
                        </p>

                        <div className="">
                            <a href="#/" className="btn btn-primary jr-btn-rounded">Reset Password</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword1;

