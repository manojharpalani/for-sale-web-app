import React from 'react';
import GeolocationExample from './Components/GeoLocation';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const GeoLocation = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Geo Location Map" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <GeolocationExample />
                </CardBox>
            </div>
        </div>
    );
};

export default GeoLocation;
