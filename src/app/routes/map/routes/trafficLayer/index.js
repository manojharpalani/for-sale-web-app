import React from 'react';
import TrafficLayerEx from './Components/TrafficLayerEx';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const TrafficLayer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Traffic Layer Map" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <TrafficLayerEx/>
                </CardBox>
            </div>
        </div>
    );
};

export default TrafficLayer;
