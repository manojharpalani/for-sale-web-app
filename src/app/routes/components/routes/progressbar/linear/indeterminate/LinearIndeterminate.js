import React from 'react';
import {LinearProgress} from 'material-ui/Progress';

function LinearIndeterminate() {
    return (
        <div>
            <LinearProgress />
            <br />
            <LinearProgress color="accent" />
        </div>
    );
}


export default LinearIndeterminate;