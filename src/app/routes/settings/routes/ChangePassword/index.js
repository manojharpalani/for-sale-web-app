import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const ChangePassword = () => {
      return (
          <div
              className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
              <div className="login-content">
                  <div className="login-header">
                      <a className="app-logo" href="#/" title="Off Work">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/2000px-Amazon_logo_plain.svg.png" alt="jambo" title="jambo"/>
                      </a>
                  </div>

                  <div className="mb-2">
                      <h2>Change your password</h2>
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
                          <TextField
                              type="password"
                              id="required"
                              label="Current Password"
                              fullWidth
                              defaultValue=""
                              margin="normal"
                              className="mt-1"
                          />
                          <TextField
                              type="password"
                              id="required"
                              label="New Password"
                              fullWidth
                              defaultValue=""
                              margin="normal"
                              className="mt-1"
                          />
                          <TextField
                              type="password"
                              id="required"
                              label="Confirm New Password"
                              fullWidth
                              defaultValue=""
                              margin="normal"
                              className="mt-1"
                          />
                          <p className="mb-3">
                              Don't remember your email? &nbsp;
                              <a className="small text-primary" href="javascript:void(0)">Contact Support</a>.
                          </p>

                          <Button href="javascript:void(0)" raised className="jr-btn text-white btn-primary">
                              Change Password
                          </Button>
                      </form>
                  </div>
              </div>
          </div>
      );
  };

export default ChangePassword;
