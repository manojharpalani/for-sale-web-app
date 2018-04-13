import React from 'react';

const LockScreen1 = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <a className="app-logo" href="#/app/app-module/login-1" title="Jambo">
                        <img src="http://via.placeholder.com/220x80" alt="jambo" title="jambo" />
                    </a>
                </div>

                <div className="login-avatar mb-4">
                    <img className="rounded-circle size-120" src="http://via.placeholder.com/256x256" alt="" title="" />
                </div>
                <div className="mb-4">
                    <h3>John Smith</h3>
                    <p>Enter your password to unlock the screen!</p>
                </div>
                <form method="get" action="#/app/app-module/login-1">
                    <div className="form-group mb-4">
                        <input type="password" placeholder="Password" className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <a href="#/app/app-module/login-1" className="btn btn-primary jr-btn-rounded">Unlock</a>
                    </div>
                </form>
                <div><a className="text-primary right-arrow" href="#/app/app-module/login-1">Sign in using different account</a></div>
            </div>
        </div>
    );
};
export default LockScreen1;
