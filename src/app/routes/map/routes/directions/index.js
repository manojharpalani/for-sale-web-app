import React from 'react';
import MapDirections from './Components/MapDirections';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const Directions = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Map Directions" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapDirections />
                </CardBox>
            </div>
        </div>
    );
};

export default Directions;
