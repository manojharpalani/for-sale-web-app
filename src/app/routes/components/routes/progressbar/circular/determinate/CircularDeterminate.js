import React from 'react';
import {CircularProgress} from 'material-ui/Progress';


function CircularDeterminate() {
    return (
        <div className="manage-margin">
            <CircularProgress mode="determinate" value={75}/>
            <CircularProgress
                size={50}
                mode="determinate"
                value={25}
                min={0}
                max={50}
            />
            <CircularProgress color="accent" mode="determinate" value={75}/>
            <CircularProgress
                color="accent"
                size={50}
                mode="determinate"
                value={25}
                min={0}
                max={50}
            />
        </div>
    );
}


export default CircularDeterminate;