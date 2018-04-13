import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Alerts from './routes/alert'
import Appbar from './routes/appbar'
import Avatar from './routes/avatar'
import Badges from './routes/badges'
import BottomNavigation from './routes/bottomNavigation'
import Breadcrumbs from './routes/breadcrumbs'
import Button from './routes/button'
import ButtonGroup from './routes/buttonGroup'
import Cards from './routes/cards'
import Carousel from './routes/carousel'
import Chips from './routes/chips'
import ColorPicker from './routes/colorPicker'
import Dialogs from './routes/dialogs'
import Dividers from './routes/dividers'
import Drawer from './routes/drawer'
import ExpansionPanel from './routes/expansionPanel'
import GridList from './routes/gridList'
import List from './routes/list'
import MenusNPaper from './routes/menuNPaper'
import Popovers from './routes/popovers'
import Progressbar from './routes/progressbar'
import Selection from './routes/selection'
import Snackbar from './routes/snackbar'
import Stepper from './routes/stepper'
import Tables from './routes/tables'
import Tabs from './routes/tabs'
import TextFields from './routes/textFields'
import Tooltip from './routes/tooltip'
import Selects from './routes/selects'
import Pickers from './routes/pickers'
import Typography from './routes/typography'


const Components = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/alerts`}/>
            <Route path={`${match.url}/alerts`} component={Alerts}/>
            <Route path={`${match.url}/appbar`} component={Appbar}/>
            <Route path={`${match.url}/avatars`} component={Avatar}/>
            <Route path={`${match.url}/badges`} component={Badges}/>
            <Route path={`${match.url}/bottom-navigation`} component={BottomNavigation}/>
            <Route path={`${match.url}/buttons`} component={Button}/>
            <Route path={`${match.url}/button-group`} component={ButtonGroup}/>
            <Route path={`${match.url}/breadcrumbs`} component={Breadcrumbs}/>
            <Route path={`${match.url}/cards`} component={Cards}/>
            <Route path={`${match.url}/carousel`} component={Carousel}/>
            <Route path={`${match.url}/chips`} component={Chips}/>
            <Route path={`${match.url}/color-picker`} component={ColorPicker}/>
            <Route path={`${match.url}/dialogs`} component={Dialogs}/>
            <Route path={`${match.url}/dividers`} component={Dividers}/>
            <Route path={`${match.url}/drawer`} component={Drawer}/>
            <Route path={`${match.url}/expansion-panel`} component={ExpansionPanel}/>
            <Route path={`${match.url}/grid-list`} component={GridList}/>
            <Route path={`${match.url}/list`} component={List}/>
            <Route path={`${match.url}/menu-paper`} component={MenusNPaper}/>
            <Route path={`${match.url}/pickers`} component={Pickers}/>
            <Route path={`${match.url}/popovers`} component={Popovers}/>
            <Route path={`${match.url}/progressbar`} component={Progressbar}/>
            <Route path={`${match.url}/selection`} component={Selection}/>
            <Route path={`${match.url}/selects`} component={Selects}/>
            <Route path={`${match.url}/snackbar`} component={Snackbar}/>
            <Route path={`${match.url}/stepper`} component={Stepper}/>
            <Route path={`${match.url}/tables`} component={Tables}/>
            <Route path={`${match.url}/tabs`} component={Tabs}/>
            <Route path={`${match.url}/text-fields`} component={TextFields}/>
            <Route path={`${match.url}/tooltips`} component={Tooltip}/>
            <Route path={`${match.url}/typography`} component={Typography}/>
        </Switch>
    </div>
);

export default Components;
