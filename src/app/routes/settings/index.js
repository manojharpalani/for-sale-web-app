import React from 'react';
import {Route} from 'react-router-dom';

import ChangePassword from './routes/ChangePassword/'

const Settings = ({match}) => (
<div>
<Route path={`${match.url}/change-password`} component={ ChangePassword } />
</div>
);

export default Settings;
