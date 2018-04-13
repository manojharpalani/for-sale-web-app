import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Directions from './routes/directions'
import Drawing from './routes/drawingView'
import EventHanlder from './routes/eventHanlder'
import GeoLocation from './routes/geoLocation'
import KmLayer from './routes/kmLayer'
import MapClustering from './routes/mapClustering'
import Overlay from './routes/mapOverlay'
import PlaceSearch from './routes/placeSearch'
import PopUpInfo from './routes/popUpInfo'
import Simple from './routes/simple'
import StreetView from './routes/streetView'
import Styled from './routes/styled'
import TrafficLayer from './routes/trafficLayer'


const Map = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/simple`}/>
            <Route path={`${match.url}/directions`} component={Directions}/>
            <Route path={`${match.url}/drawing`} component={Drawing}/>
            <Route path={`${match.url}/event`} component={EventHanlder}/>
            <Route path={`${match.url}/geo-location`} component={GeoLocation}/>
            <Route path={`${match.url}/kml`} component={KmLayer}/>
            <Route path={`${match.url}/clustering`} component={MapClustering}/>
            <Route path={`${match.url}/overlay`} component={Overlay}/>
            <Route path={`${match.url}/place-search`} component={PlaceSearch}/>
            <Route path={`${match.url}/popup-info`} component={PopUpInfo}/>
            <Route path={`${match.url}/simple`} component={Simple}/>
            <Route path={`${match.url}/street-view`} component={StreetView}/>
            <Route path={`${match.url}/styled`} component={Styled}/>
            <Route path={`${match.url}/traffic`} component={TrafficLayer}/>
        </Switch>
    </div>
);

export default Map;
