import React from 'react';
import Button from 'material-ui/Button';

const RaisedButtons = () => {
    return (
        <div className="jr-btn-group">
            <Button raised className="jr-btn bg-white">Default</Button>
            <Button raised className="jr-btn bg-primary text-white">Primary</Button>
            <Button raised className="jr-btn bg-secondary text-white">Secondary</Button>
            <Button raised className="jr-btn" disabled>Disabled</Button>
        </div>
    );
};

export default RaisedButtons;