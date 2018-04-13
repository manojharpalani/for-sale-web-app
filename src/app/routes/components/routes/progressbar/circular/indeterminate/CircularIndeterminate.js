import React from 'react';
import {CircularProgress} from 'material-ui/Progress';

function CircularIndeterminate() {
    return (
        <div className="manage-margin">
            <CircularProgress/>
            <CircularProgress size={50}/>
            <CircularProgress color="accent"/>
            <CircularProgress color="accent" size={50}/>
        </div>
    );
}

export default CircularIndeterminate;