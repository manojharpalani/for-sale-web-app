import React from 'react';
import Button from 'material-ui/Button'

const Error404 = () => (
    <div className="page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomInDown">404</div>
            <h2 className="text-center fw-regular title bounceIn animation-delay-10 animated">Oops, an error has
                occurred. Page not found!</h2>
            <form className="mb-4" role="search">
                <div className="search-bar shadow flipInX animation-delay-16 animated">
                    <div className="form-group">
                        <input type="search" className="form-control form-control-lg border-0" placeholder="Search..." />
                        <button className="search-icon">
                            <i className="zmdi zmdi-search zmdi-hc-lg" />
                        </button>
                    </div>
                </div>
            </form>
            <p className="text-center zoomIn animation-delay-20 animated">
                <Button className="text-white bg-primary" href="#/" raised>Go to Home</Button>
            </p>
        </div>
    </div>
);

export default Error404;
