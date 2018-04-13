import React from 'react';
import Button from 'material-ui/Button'

const Error500 = () => (
    <div className="page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomInDown">500</div>
            <h2 className="text-center fw-regular title animated bounceIn animation-delay-10">Sorry, server goes
                wrong</h2>

            <p className="text-center animated flipInX animation-delay-20">
                <Button className="text-white bg-primary" href="#/" raised>Go to Home</Button>
            </p>
        </div>
    </div>
);

export default Error500;
