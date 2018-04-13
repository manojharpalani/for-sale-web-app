import React from 'react';
import MapKmLayer from './Components/MapKmLayer';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';


const KmLayer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Map Km Layer" match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapKmLayer />
                </CardBox>
            </div>
        </div>
    );
};

export default KmLayer;
