import React from 'react';
import StreetViewPanoramaEx from './Components/StreetViewPanoramaEx';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const StreetView = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Street View Panorama Map" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12" heading="Street View Panorama" headerOutside>
                    <StreetViewPanoramaEx />
                </CardBox>
            </div>
        </div>
    );
};

export default StreetView;
