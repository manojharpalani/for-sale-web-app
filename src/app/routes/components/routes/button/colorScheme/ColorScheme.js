import React from 'react';
import Button from 'material-ui/Button';

const ColorScheme = () => {
    return (
        <div>
            <div className="jr-btn-group mb-3 mb-md-5">
                <Button raised className="jr-btn bg-white text-black">Default</Button>
                <Button raised className="jr-btn bg-primary text-white">Primary</Button>
                <Button raised color="accent" className="jr-btn text-white">Secondary</Button>
                <Button raised className="jr-btn bg-warning text-white">Warning</Button>
                <Button raised className="jr-btn bg-info text-white">Info</Button>
                <Button raised className="jr-btn bg-success text-white">Success</Button>
                <Button raised className="jr-btn bg-danger text-white">Danger</Button>
            </div>
            <h4 className="sub-heading"> Optional Material Design Colors</h4>
            <div className="jr-btn-group">
                <Button raised className="jr-btn bg-cyan text-white">Cyan</Button>
                <Button raised className="jr-btn bg-teal text-white">Teal</Button>
                <Button raised className="jr-btn bg-amber text-white">Amber</Button>
                <Button raised className="jr-btn bg-orange text-white">Orange</Button>
                <Button raised className="jr-btn bg-deep-orange text-white">Deep Orange</Button>
                <Button raised className="jr-btn bg-red text-white">Red</Button>
                <Button raised className="jr-btn bg-pink text-white">Pink</Button>
                <Button raised className="jr-btn bg-light-blue text-white">Light Blue</Button>
                <Button raised className="jr-btn bg-blue text-white">Blue</Button>
                <Button raised className="jr-btn bg-indigo text-white">Indigo</Button>
                <Button raised className="jr-btn bg-lime text-white">Lime</Button>
                <Button raised className="jr-btn bg-light-green text-white">Light Green</Button>
                <Button raised className="jr-btn bg-purple text-white">Purple</Button>
                <Button raised className="jr-btn bg-deep-purple text-white">Deep Purple</Button>
                <Button raised className="jr-btn bg-green text-white">Green</Button>
                <Button raised className="jr-btn bg-grey text-white">Grey</Button>
                <Button raised className="jr-btn bg-blue-grey text-white">Blue Grey</Button>
                <Button raised className="jr-btn bg-black text-white">Black</Button>
            </div>
        </div>
    );
};

export default ColorScheme;